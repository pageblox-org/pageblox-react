import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"
import { getAuth } from "firebase/auth"

let firebaseConfig

if (process.env.NODE_ENV === "production") {
  firebaseConfig = {
    apiKey: "AIzaSyAjAfuXwW6EaDf-fi-6LkhpzmHpucpWv0Y",
    authDomain: "pageblox-server-4c58a.firebaseapp.com",
    projectId: "pageblox-server-4c58a",
    storageBucket: "pageblox-server-4c58a.appspot.com",
    messagingSenderId: "624958838328",
    appId: "1:624958838328:web:e1d3736fee2fd49b6538cd",
    measurementId: "G-TS0MBHV5RX"
  }
} else {
  firebaseConfig = {
    apiKey: "AIzaSyCVbv7tFW_ayAiBkUSfJ5eroBXQLc3Yz-I",
    authDomain: "pageblox-server-dev.firebaseapp.com",
    projectId: "pageblox-server-dev",
    storageBucket: "pageblox-server-dev.appspot.com",
    messagingSenderId: "973664002569",
    appId: "1:973664002569:web:6802cc030c705e074b4ed8",
    measurementId: "G-0QKKNZBXVC"
  }
}

// Initialize Firebase

const app = initializeApp(firebaseConfig)
export const database = getFirestore(app)
export const storage = getStorage(app)
export const auth = getAuth(app)