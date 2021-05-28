import firebase from 'firebase';
require('@firebase/firestore') 
 var firebaseConfig = {
    apiKey: "AIzaSyAD3cpaRCZQHFEU98D-eGMbgnrxbMPaZr8",
    authDomain: "bartersystem-ba194.firebaseapp.com",
    projectId: "bartersystem-ba194",
    storageBucket: "bartersystem-ba194.appspot.com",
    messagingSenderId: "1050018130360",
    appId: "1:1050018130360:web:37863fca3c8b804155c74d"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore();