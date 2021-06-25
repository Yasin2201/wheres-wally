import { useState } from 'react'
import firebase from './components/firebase'
import Target from './components/Target'

function App() {

  const [target, setTarget] = useState(false)
  const [viewImg, setViewImg] = useState(false)

  const [clientPos, setClientPos] = useState([undefined])
  const [locURL, setLocURL] = useState('')
  const storage = firebase.storage().ref()

  const check = () => {
    ref()
  }

  const ref = () => {
    firebase.firestore().collection('characters').get().then((snapshot) => {
      snapshot.docs.map((char) => console.log(char.data()))
    })
    storage.child('wheresWally-Easy.png').getDownloadURL().then((url) => {
      setLocURL(url)
      setViewImg(true)
    })
  }

  const displayDiv = (e) => {
    setClientPos([e.clientX, e.clientY])
    setTarget(true)
  }

  return (
    <div id="container">
      <h1>Where's Wally</h1>
      <button onClick={check}>Start</button>
      {viewImg && <img src={locURL} alt="wally" width='100%' onClick={displayDiv} />}
      {target && <Target clientPos={clientPos} />}
    </div >
  );
}

export default App;
