import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAd_TMmI_2BulXvht_24SZo8mj3VY6SLh0",
  authDomain: "vite-projet.firebaseapp.com",
  projectId: "vite-projet",
  storageBucket: "vite-projet.appspot.com",
  messagingSenderId: "375670900923",
  appId: "1:375670900923:web:feba06af12723a53c3419e"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const database = getFirestore(app);

export { database };