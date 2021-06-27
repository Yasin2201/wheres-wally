import { useState } from 'react'
import firebase from './components/firebase'
import Target from './components/Target'
import Timer from './components/Timer'

function App() {

  const [target, setTarget] = useState(false)
  const [viewImg, setViewImg] = useState(false)
  const [clientPos, setClientPos] = useState([undefined])
  const [locURL, setLocURL] = useState('')
  const [characters, setCharacters] = useState([])
  const [gameOver, setGameOver] = useState(null)

  const db = firebase.firestore()
  const storage = firebase.storage()

  const check = () => {
    getChars()
    getImage()
  }

  // useEffect(() => {
  //   getChars()
  //   getImage()
  // }, [])

  const getChars = async () => {
    try {
      const characterInfoArr = []
      const ref = db.collection('characters')
      const data = await ref.get()
      for (const doc of data.docs) {
        characterInfoArr.push(doc.data())
      }
      setCharacters(characterInfoArr)
    } catch (err) {
      console.log(err.message)
    }
  }

  const getImage = async () => {
    try {
      const ref = storage.ref().child('Easy.jpeg')
      const data = await ref.getDownloadURL()
      setLocURL(data)
      setViewImg(true)
    } catch (err) {
      console.log(err.message)
    }
  }

  const displayDiv = (e) => {
    const rect = e.target.getBoundingClientRect() //Method to get the size and position of an element's bounding box, relative to the viewport.
    const x = parseInt(e.clientX - rect.left)
    const y = parseInt(e.clientY - rect.top)
    setClientPos([x, y, rect])
    setTarget(true)
  }

  const getChoice = (e) => {
    const choice = characters.find((char) => char.name === e.target.textContent)

    if (clientPos[0] > choice.posX - 20 && clientPos[0] < choice.posX + 20 && clientPos[1] > choice.posY - 20 && clientPos[1] < choice.posY + 20) {
      console.log('yay')
      const newCharactersArr = characters.filter((char) => char !== choice)
      setCharacters(newCharactersArr)
    } else {
      console.log('nah')
    }
  }

  return (
    <div id="container">
      <h1>Where's Wally</h1>
      {viewImg && <Timer gameOver={gameOver} />}
      <button onClick={check}>Start</button>
      {viewImg && <img src={locURL} alt="wally" width='1400px' onClick={displayDiv} />}
      {target && <Target clientPos={clientPos} getChoice={getChoice} characters={characters} />}
    </div >
  );
}

export default App;
