
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCpW5QREUV8xkhGP44J0c2BKaC8Kl3MwEo",
  authDomain: "fir-add-edit.firebaseapp.com",
  projectId: "fir-add-edit",
  storageBucket: "fir-add-edit.appspot.com",
  messagingSenderId: "340660898543",
  appId: "1:340660898543:web:c6080a3919be2d51a6a91a"
};


const app = initializeApp(firebaseConfig);
export const fireDB =  getFirestore(app);