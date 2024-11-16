import firebase from "firebase/app";
import 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyAG6R_6Cct6AMN5WO9cQdOZtogbEG7vDmI",
    authDomain: "activity1cut3.firebaseapp.com",
    projectId: "activity1cut3",
    storageBucket: "activity1cut3.firebasestorage.app",
    messagingSenderId: "263770576459",
    appId: "1:263770576459:web:f89f8afe0241f0bfd31fce"
};

// Initialize Firebase
if (!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export {firebase}