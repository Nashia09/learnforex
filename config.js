// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// import * as firebase from 'firebase';
// import '@firebase/auth';
// import '@firebase/firestore';

// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCkl2NK0GfnV-0IkUEQ6Zh8AGgkNrtzE1g",
  authDomain: "forexapp-6f5cd.firebaseapp.com",
  projectId: "forexapp-6f5cd",
  storageBucket: "forexapp-6f5cd.appspot.com",
  messagingSenderId: "989306538699",
  appId: "1:989306538699:web:3b30ff68b60cf23808294e",
  measurementId: "G-HRWEP2NRNN"
};


if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}
// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export { firebase };