import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"
import { getAuth } from "firebase/auth"

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

export const database = getFirestore(app)
export const storage = getStorage(app)
export const auth = getAuth(app)