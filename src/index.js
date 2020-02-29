import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBhd7gn1cZNM6jsqxWIT0hUMoFpUFMc-OU",
  authDomain: "hello-firebase-2b1e1.firebaseapp.com",
  databaseURL: "https://hello-firebase-2b1e1.firebaseio.com",
  projectId: "hello-firebase-2b1e1",
  storageBucket: "hello-firebase-2b1e1.appspot.com",
  messagingSenderId: "668831498473",
  appId: "1:668831498473:web:e06f303c1be25a3abdb078",
  measurementId: "G-CS18Q6VNMM"
};

firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
