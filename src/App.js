import { useState } from 'react'
import firebase from './components/firebase'
import Target from './components/Target'

function App() {

  const [target, setTarget] = useState(false)
  const [clientPos, setClientPos] = useState([undefined])

  const check = () => {
    ref()
  }

  const ref = () => {
    firebase.firestore().collection('characters').get().then((snapshot) => {
      snapshot.docs.map((char) => console.log(char.data()))
    })
  }

  const displayDiv = (e) => {
    setClientPos([e.clientX, e.clientY])
    setTarget(true)
  }

  return (
    <div id="container">
      <h1>Where's Wally</h1>
      <button onClick={check}>Get Characters</button>
      <div id="pic" style={{ height: '80vh' }} onClick={displayDiv}></div>
      {target && <Target clientPos={clientPos} />}
    </div >
  );
}

export default App;
