import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyB3FPayekMCIIpO-y-ULOMo2AJ3DbjhXuc",
  authDomain: "mewar-server.firebaseapp.com",
  databaseURL: "https://mewar-server.firebaseio.com",
  projectId: "mewar-server",
  storageBucket: "mewar-server.appspot.com",
  messagingSenderId: "553164834576",
  appId: "1:553164834576:web:f9021ffa886b4e1fb80795",
  measurementId: "G-Q0EY7WNXXG"
};

firebase.initializeApp(config);

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
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
