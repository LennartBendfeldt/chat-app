import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
const config = {
    apiKey: "AIzaSyB9Pb_ABkwtFsURImvE02HK-I-UgZ2Gdv8",
    authDomain: "chatty-74e03.firebaseapp.com",
  databaseURL: "https://chatty-74e03-default-rtdb.firebaseio.com/"
};

firebase.initializeApp(config);

export const auth = firebase.auth;
export const db = firebase.database();