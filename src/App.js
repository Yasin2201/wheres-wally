import { useEffect, useState } from 'react'
import firebase from './components/firebase'
import Target from './components/Target'
import Timer from './components/Timer'
import SubmitScore from './components/SubmitScore'

function App() {

  const [target, setTarget] = useState(false)
  const [viewImg, setViewImg] = useState(false)
  const [clientPos, setClientPos] = useState([undefined])
  const [locURL, setLocURL] = useState('')
  const [characters, setCharacters] = useState([0])
  const [gameOver, setGameOver] = useState(null)
  const [time, setTime] = useState(0)
  const [snackbar, setSnackbar] = useState(false)
  const [checkChoice, setCheckChoice] = useState(undefined)

  useEffect(() => {
    const db = firebase.firestore()
    const storage = firebase.storage()

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
    getChars()
    getImage()
    setGameOver(false)
  }, [])


  useEffect(() => {
    if (!gameOver) {
      return characters.length === 0 ? setGameOver(true) : gameOver
    }
  }, [gameOver, characters.length])

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
      setTarget(false)
      popSnackBar(`You Found ${choice.name}!`)
    } else {
      console.log('nah')
      setTarget(false)
      popSnackBar('Wrong! Try Again')
    }
  }

  const runTimer = () => {
    setTime(time + 1)
  }

  const popSnackBar = (choice) => {
    setSnackbar(true)
    setCheckChoice(choice)
    setTimeout(() => {
      setSnackbar(false)
    }, 1500)
  }

  return (
    <div id="container">
      <div>
        <h1>Where's Wally</h1>
        {viewImg && <Timer gameOver={gameOver} runTimer={runTimer} time={time} />}
      </div>
      <div>
        {gameOver && <SubmitScore />}
        {snackbar && <h1>{checkChoice}</h1>}
        {viewImg && <img src={locURL} alt="wally" width='1400px' onClick={displayDiv} />}
        {target && <Target clientPos={clientPos} getChoice={getChoice} characters={characters} />}
      </div>
    </div>
  );
}

export default App;
