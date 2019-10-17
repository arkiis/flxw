import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAR1ZT4aUhDFcBvjeUwcvSajE9MKrylU8k",
  authDomain: "flxw-f4aba.firebaseapp.com",
  databaseURL: "https://flxw-f4aba.firebaseio.com",
  projectId: "flxw-f4aba",
  storageBucket: "flxw-f4aba.appspot.com",
  messagingSenderId: "397549313508",
  appId: "1:397549313508:web:850b457b005dbb88"
};

firebase.initializeApp(config);
firebase.firestore();
const db = firebase.firestore();

export default firebase;
