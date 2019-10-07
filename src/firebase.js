import firebase from 'firebase';
const Config = {
    apiKey: "AIzaSyCS_P2uZ7Xerwi7lsZTBct8ntroYIMfZms",
    authDomain: "guest-house-a39d5.firebaseapp.com",
    databaseURL: "https://guest-house-a39d5.firebaseio.com",
    projectId: "guest-house-a39d5",
    storageBucket: "",
    messagingSenderId: "949202861035",
    appId: "1:949202861035:web:5afcce44b01c1fdcf5f7ae",
    measurementId: "G-ZD20P26JNW"
}
const fire = firebase.initializeApp(Config);
export default fire;