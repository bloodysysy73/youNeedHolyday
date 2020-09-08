import firebase from 'firebase/app';
import "firebase/database";
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyCwxesRBAR1jAfzTuL8nVgUC9kG9Ajkk7Y",
    authDomain: "youneedholiday-982b7.firebaseapp.com",
    databaseURL: "https://youneedholiday-982b7.firebaseio.com",
    projectId: "youneedholiday-982b7",
    storageBucket: "youneedholiday-982b7.appspot.com",
    messagingSenderId: "271159529392",
    appId: "1:271159529392:web:af4ac511273d48680ad075",
    measurementId: "G-PRKVT8LQS6",
}

// eslint-disable-next-line
const firebaseAppInstance = firebase.initializeApp(config);

// eslint-disable-next-line
var db;
export default db = firebase.database();
