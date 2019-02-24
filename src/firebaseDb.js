import firebase from 'firebase'
var config = {
    apiKey: "AIzaSyAgIhi02NVhB53MUWTwBIrF_PnIdDgorJU",
    authDomain: "resume-df0fa.firebaseapp.com",
    databaseURL: "https://resume-df0fa.firebaseio.com",
    projectId: "resume-df0fa",
    storageBucket: "resume-df0fa.appspot.com",
    messagingSenderId: "462385505050"
};
const firebaseApp = firebase.initializeApp(config)
export const firebaseDb = firebaseApp.database();