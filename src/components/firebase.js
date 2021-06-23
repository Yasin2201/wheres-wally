import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDIK7_x9OvvcJKsmodofUhwhs5vq5PZR40",
    authDomain: "wheres-wally-63813.firebaseapp.com",
    projectId: "wheres-wally-63813",
    storageBucket: "wheres-wally-63813.appspot.com",
    messagingSenderId: "284119324952",
    appId: "1:284119324952:web:2313b2e3a199c51dd4e66d"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase