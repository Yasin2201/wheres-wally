import { useState } from 'react'
import firebase from './components/firebase'
import Target from './components/Target'

function App() {

  const [target, setTarget] = useState(false)
  const [viewImg, setViewImg] = useState(false)
  const [clientPos, setClientPos] = useState([undefined])
  const [locURL, setLocURL] = useState('')
  const [characters, setCharacters] = useState([])

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
      const arr = []
      const ref = db.collection('characters')
      const data = await ref.get()
      for (const doc of data.docs) {
        arr.push(doc.data())
      }
      setCharacters(arr)
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

  }

  return (
    <div id="container">
      <h1>Where's Wally</h1>
      <button onClick={check}>Start</button>
      {viewImg && <img src={locURL} alt="wally" width='1400px' onClick={displayDiv} />}
      {target && <Target clientPos={clientPos} getChoice={getChoice} characters={characters} />}
    </div >
  );
}

export default App;
