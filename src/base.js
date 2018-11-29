import Rebase from 're-base'
import firebase from 'firebase';
import * as database from 'firebase/database';

const app = firebase.initializeApp({
    apiKey: "AIzaSyAzUu_3x3_JBwvZ6AcPIZQ63OW8DPddEfE",
    authDomain: "recipesearch-46fe6.firebaseapp.com",
    databaseURL: "https://recipesearch-46fe6.firebaseio.com",
    projectId: "recipesearch-46fe6",
    storageBucket: "recipesearch-46fe6.appspot.com",
    messagingSenderId: "146513880979"
});

var db = firebase.database(app);
var base = Rebase.createClass(db);

var facebookProvider = new firebase.auth.FacebookAuthProvider();

export { app, facebookProvider };
export default base;