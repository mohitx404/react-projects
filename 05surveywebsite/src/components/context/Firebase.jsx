import { createContext,useContext } from "react";
import { initializeApp } from "firebase/app";
import {getAuth,signInWithPopup, createUserWithEmailAndPassword,signInWithEmailAndPassword,GoogleAuthProvider} from "firebase/auth"


const FirebaseContext = createContext(null);

const firebaseConfig = {
  apiKey: "AIzaSyByK9Y27zJOh3FtHqBC-moUqsPPtDX0Hvc",
  authDomain: "my-survey-app-f7cdd.firebaseapp.com",
  projectId: "my-survey-app-f7cdd",
  storageBucket: "my-survey-app-f7cdd.firebasestorage.app",
  messagingSenderId: "418797982826",
  appId: "1:418797982826:web:e433a85802eaa7d248a613",
  measurementId: "G-V4TLDSJ7P7"
};

export const useFirebase = () => {
    return useContext(FirebaseContext)
}

const firebaseapp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseapp)

const Googleprovider = new GoogleAuthProvider();

export const FirebaseProvider = ({children}) => {

    const signupUserWithEmailAndPassword = (email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signinUserWithEmailAndPassword = (email,password) => {
        return signInWithEmailAndPassword(auth,email,password)
    }
    const signinUserWithGoogleAuth = () => {
        return signInWithPopup(auth,Googleprovider)
    }

    return (
        <FirebaseContext.Provider value={{signinUserWithGoogleAuth,signinUserWithEmailAndPassword,signupUserWithEmailAndPassword}}>
            {children}
        </FirebaseContext.Provider>
    )
}
