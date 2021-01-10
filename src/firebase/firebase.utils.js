import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAn2q-33_bUBe3sxvXHfDBGMDL2_yDx5II",
  authDomain: "clothes-2021.firebaseapp.com",
  projectId: "clothes-2021",
  storageBucket: "clothes-2021.appspot.com",
  messagingSenderId: "623898068922",
  appId: "1:623898068922:web:d73419745ce2f1bd897f83",
  measurementId: "G-8BENRFR88W",
};

//creates th snapshot/data
export const createUserProfileDocument = async (userAuth, additonalData) => {
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
        ...additonalData,
      });
    } catch (error) {
      console.log("Error creating user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
