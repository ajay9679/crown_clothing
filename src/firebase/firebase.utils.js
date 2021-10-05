import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDRMofR5skT983n1xdwJr8LVCOgloamInE",
  authDomain: "crwn-db-fbc9c.firebaseapp.com",
  projectId: "crwn-db-fbc9c",
  storageBucket: "crwn-db-fbc9c.appspot.com",
  messagingSenderId: "845299953485",
  appId: "1:845299953485:web:42a57e4e45434985dc1104",
  measurementId: "G-LDBC6MTN28"
};

export const createUserProfileDocument = async (userAuth, additionalDdata) => {
	if(!userAuth) return;
	console.log(firestore.doc(`users/${userAuth.uid}`));
	const userRef = firestore.doc(`users/${userAuth.uid}`);
	const snapShot = await userRef.get();
	if(!snapShot.exists){
		const {displayName, email} = userAuth;
		const createdAt = new Date();
		try{
			await userRef.set({displayName, email, createdAt, ...additionalDdata});
		}catch(error){
			console.log(`error creating user ${error.message}`);
		}
	}

	return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;