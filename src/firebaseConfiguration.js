import { initializeApp } from 'firebase/app'
import { getAuth } from "firebase/auth";
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
// const app = firebase.initializeApp(firebaseConfig)
export const auth = getAuth()
export default app