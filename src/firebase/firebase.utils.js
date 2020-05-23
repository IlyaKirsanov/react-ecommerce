import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: "AIzaSyAahjSG3CeA-xyslJjpeZqsrEwRyNnwPJU",
	authDomain: "react-ecommerce-crown-37db5.firebaseapp.com",
	databaseURL: "https://react-ecommerce-crown-37db5.firebaseio.com",
	projectId: "react-ecommerce-crown-37db5",
	storageBucket: "react-ecommerce-crown-37db5.appspot.com",
	messagingSenderId: "443199035860",
	appId: "1:443199035860:web:0df13cdf13a69a2a24de41",
	measurementId: "G-HD338EC937"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;

	const userRef = firestore.doc(`users/${userAuth.uid}`);

	const snapShot = await userRef.get();

	if (!snapShot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();
		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData
			})
		} catch (error) {
			console.log('Error creating user', error.message);
		}
	}

	return userRef;

}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;