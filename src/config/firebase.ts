// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfFjw8I987MHkoiSDYrYn9jLaFEQpy1Xg",
  authDomain: "test-social-app-b7e2e.firebaseapp.com",
  projectId: "test-social-app-b7e2e",
  storageBucket: "test-social-app-b7e2e.appspot.com",
  messagingSenderId: "129479818139",
  appId: "1:129479818139:web:85a99190fd5da304e2bf3e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
