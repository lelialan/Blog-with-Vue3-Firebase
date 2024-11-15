import firebase  from "firebase/app";
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBZKooNLRT10EVD2UEvh5N0xoCCz1HPMI8",
  authDomain: "udemy-vue-firebase-ff78a.firebaseapp.com",
  projectId: "udemy-vue-firebase-ff78a",
  storageBucket: "udemy-vue-firebase-ff78a.firebasestorage.app",
  messagingSenderId: "634151153490",
  appId: "1:634151153490:web:66628318fe556b200a548b"
};

//init firebase
firebase.initializeApp(firebaseConfig)
//init firestore
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore ,timestamp }