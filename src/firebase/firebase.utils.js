import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
  apiKey: "AIzaSyAn2q-33_bUBe3sxvXHfDBGMDL2_yDx5II",
  authDomain: "clothes-2021.firebaseapp.com",
  projectId: "clothes-2021",
  storageBucket: "clothes-2021.appspot.com",
  messagingSenderId: "623898068922",
  appId: "1:623898068922:web:d73419745ce2f1bd897f83",
  measurementId: "G-8BENRFR88W"
}


firebase.initializeApp(config);


export const auth = firebase.auth()
export const firestore= firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;