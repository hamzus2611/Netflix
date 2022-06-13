// import firebase from firebase
import { getStorage } from "firebase/storage";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyCtik8I9YbrKo8H-J393YmZT5AzyVDMgnk",
    authDomain: "netflix-24abb.firebaseapp.com",
    projectId: "netflix-24abb",
    storageBucket: "netflix-24abb.appspot.com",
    messagingSenderId: "499718985343",
    appId: "1:499718985343:web:3b46426855b1920b6a114a",
    measurementId: "G-BHQZ58ZZNE"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
//   const app = initializeApp(firebaseConfig);
const storage = getStorage(firebaseApp)
export default storage;