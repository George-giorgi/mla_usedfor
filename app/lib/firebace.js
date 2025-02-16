// lib/firebase.js
import { initializeApp } from "firebase/app";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC_H__QNb-U_qESJjYYqLwsoAJieVpqJzU",
  authDomain: "mallaghan-d35c2.firebaseapp.com",
  projectId: "mallaghan-d35c2",
  storageBucket: "mallaghan-d35c2.firebasestorage.app",
  messagingSenderId: "806639679397",
  appId: "1:806639679397:web:b4f7c946618994d8775a4c",
  measurementId: "G-BHHVFJ6H3Q",
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage, ref, uploadBytesResumable, getDownloadURL };
