
import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyD8-i6m20pPhL4U9ZL29R9GINW01Br7UMk",
    authDomain: "resources-pychat.firebaseapp.com",
    projectId: "resources-pychat",
    storageBucket: "resources-pychat.appspot.com",
    messagingSenderId: "320944844715",
    appId: "1:320944844715:web:f05e18f618e1de57e16cee",
    measurementId: "G-R0VJNKKL2K"
  };

const firebaseApp=firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();
const auth=firebase.auth();
const provider= new firebase.auth.GoogleAuthProvider();

export {db,auth,provider}