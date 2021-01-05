import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDHxQBft-zjQdSGYmBqhQ2wMV6rpSJzKeQ",
  authDomain: "facebook-clone-cfc9f.firebaseapp.com",
  databaseURL: "https://facebook-clone-cfc9f.firebaseio.com",
  projectId: "facebook-clone-cfc9f",
  storageBucket: "facebook-clone-cfc9f.appspot.com",
  messagingSenderId: "126979420810",
  appId: "1:126979420810:web:7d88768d255eae56e8b373",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
