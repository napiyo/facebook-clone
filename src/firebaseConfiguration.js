import { initializeApp } from 'firebase/app'
import { getDatabase } from "firebase/database";

import { getAuth, onAuthStateChanged } from "firebase/auth";


// import firebase from 'frirebase'
// import 'firebase/auth'

const app = initializeApp({
    apiKey: "AIzaSyBDPDxMPGsoAII_hYZyErOs7r6u1OCIvSc",
    authDomain: "facebook-clone-68bc7.firebaseapp.com",
    projectId: "facebook-clone-68bc7",
    storageBucket: "facebook-clone-68bc7.appspot.com",
    messagingSenderId: "472871981425",
    appId: "1:472871981425:web:394698ebd8714823c526d0",
    measurementId: "G-JLCHE9VNSP"
});
// onAuthStateChanged
// const app = firebase.initializeApp(firebaseConfig)


const auth = getAuth()
export const realtimedb = getDatabase(app)
export default auth