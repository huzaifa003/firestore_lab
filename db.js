// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCbQJ6MzwDwIs4gjVY8QfEybbqydLyEM0k",
  authDomain: "lab-task-a428f.firebaseapp.com",
  databaseURL: "https://lab-task-a428f-default-rtdb.firebaseio.com",
  projectId: "lab-task-a428f",
  storageBucket: "lab-task-a428f.appspot.com",
  messagingSenderId: "540632382443",
  appId: "1:540632382443:web:41dc607e88cc390b5bb7ae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, app }
