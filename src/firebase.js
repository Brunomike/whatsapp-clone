import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDn6d4fsyxqWizS_KD0WYwyDSNYfST06I0",
  authDomain: "whatsapp-clone-49378.firebaseapp.com",
  projectId: "whatsapp-clone-49378",
  storageBucket: "whatsapp-clone-49378.appspot.com",
  messagingSenderId: "565715173077",
  appId: "1:565715173077:web:3a292ba785da5954b9ac5c",
  measurementId: "G-7LXCF8GMG8",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
