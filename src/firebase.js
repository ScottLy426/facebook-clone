import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAgFN66Sm0SHuvX80A1X0CtdL0-tlNUV58",
  authDomain: "facebook-clone-d3c22.firebaseapp.com",
  projectId: "facebook-clone-d3c22",
  storageBucket: "facebook-clone-d3c22.appspot.com",
  messagingSenderId: "907858865047",
  appId: "1:907858865047:web:e0e417258bdd34136db2d2",
  measurementId: "G-29KKB589H4"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
