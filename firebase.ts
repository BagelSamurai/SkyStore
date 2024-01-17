// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";

import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA9lXMHaVCL-R0OIe8-EArcvZtHJZCeaeo",
  authDomain: "skystore-56733.firebaseapp.com",
  projectId: "skystore-56733",
  storageBucket: "skystore-56733.appspot.com",
  messagingSenderId: "1073486756675",
  appId: "1:1073486756675:web:efc3003b8eff38b5a38df6",
  measurementId: "G-6NLDDDMBW9",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

const storage = getStorage(app);

export { db, storage };
