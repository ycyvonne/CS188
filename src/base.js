import Rebase from 're-base'
import * as firebase from 'firebase/app';
// import 'firebase/firestore';
import * as database from 'firebase/database';

const app = firebase.initializeApp({
    apiKey: "AIzaSyAzUu_3x3_JBwvZ6AcPIZQ63OW8DPddEfE",
    authDomain: "recipesearch-46fe6.firebaseapp.com",
    databaseURL: "https://recipesearch-46fe6.firebaseio.com",
    projectId: "recipesearch-46fe6",
    storageBucket: "recipesearch-46fe6.appspot.com",
    messagingSenderId: "146513880979"
});

// const db = firebase.firestore(app);
// const settings = {timestampsInSnapshots: true};
// db.settings(settings);

var db = firebase.database(app);
var base = Rebase.createClass(db);

export { app };
export default base;