import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAd_Z7ty-pB7bUezEMtDruF_GYWBCfpm7c",
  authDomain: "pageblox-3637a.firebaseapp.com",
  projectId: "pageblox-3637a",
  storageBucket: "pageblox-3637a.appspot.com",
  messagingSenderId: "708437602502",
  appId: "1:708437602502:web:8c64a5b759360d267ee7c7",
  measurementId: "G-BS8MJMCL1B"
}

// Initialize Firebase

const app = initializeApp(firebaseConfig)
const googleProvider = new GoogleAuthProvider()

export const signInWithGoogle = (setDisplayName: (name: string) => void, setReviewModeEnabled: (enabled: boolean) => void) => {
  signInWithPopup(auth, googleProvider).then((result) => {
    localStorage.setItem("pagebloxUserInfo", JSON.stringify(
      {
        displayName: result.user.displayName,
        email: result.user.email,
        photoURL: result.user.photoURL,
      }
    ))
    result.user.displayName && setDisplayName(result.user.displayName)
    setReviewModeEnabled(true)
  }).catch((error) => {
    alert(error)
  })
}

export const signOutWithGoogle = (setDisplayName: (name: string | null) => void, setReviewModeEnabled: (enabled: boolean) => void) => {
  signOut(auth).then(() => {
    localStorage.removeItem("pagebloxUserInfo")
    setDisplayName(null)
    setReviewModeEnabled(false)
  }).catch((error) => {
    alert(error)
  })
}

export const database = getFirestore(app)
export const storage = getStorage(app)
export const auth = getAuth(app)