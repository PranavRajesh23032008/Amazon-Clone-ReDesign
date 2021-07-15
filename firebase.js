import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyB93Tt5aYwspqr_eJVvaDtjs9oWrLUuY-I",
  authDomain: "redesign-6388a.firebaseapp.com",
  projectId: "redesign-6388a",
  storageBucket: "redesign-6388a.appspot.com",
  messagingSenderId: "164353984054",
  appId: "1:164353984054:web:dd40d8387de61077637a97"
};

const firebaseApp = !firebase.apps.length
    ? firebase.initializeApp(firebaseConfig)
    : firebase.app();
const auth = firebase.auth();
const db = firebaseApp.firestore()
const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

export { auth, googleAuthProvider }
export default db
