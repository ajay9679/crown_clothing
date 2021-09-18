import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyB31iO0Zn5QL7ba-mqW31yiz36rBaXiaKA",
    authDomain: "crwn-db-d5009.firebaseapp.com",
    projectId: "crwn-db-d5009",
    storageBucket: "crwn-db-d5009.appspot.com",
    messagingSenderId: "983678647219",
    appId: "1:983678647219:web:f1f15159ce810215b3a9c6",
    measurementId: "G-R5ZXXVQJW7"
 };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;