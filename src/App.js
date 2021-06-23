import firebase from './components/firebase'

function App() {

  const check = (e) => {
    console.log(e.clientX)
    console.log(e.clientY)
    ref()
  }

  const ref = () => {
    firebase.firestore().collection('characters').get().then((snapshot) => {
      snapshot.docs.map((char) => console.log(char.data()))
    })
  }

  return (
    <div id="container">
      <h1>Where's Wally</h1>
      <button onClick={check}>Get Characters</button>
    </div>
  );
}

export default App;
