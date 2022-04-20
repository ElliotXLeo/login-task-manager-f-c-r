// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAj-Kktr3s4Q2VL-T4BXSws4ip7NlhB3lE",
  authDomain: "task-manager-elgs.firebaseapp.com",
  projectId: "task-manager-elgs",
  storageBucket: "task-manager-elgs.appspot.com",
  messagingSenderId: "552108087821",
  appId: "1:552108087821:web:c898d3cba26e7b4720d344",
  measurementId: "G-4G1D2SSPS6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);