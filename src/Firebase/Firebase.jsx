// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getFirestore, collection} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAj6mmQ4ljKcVL6k1S2pjJTPCQLIuWxgAU",
  authDomain: "beyond-the-screen.firebaseapp.com",
  projectId: "beyond-the-screen",
  storageBucket: "beyond-the-screen.appspot.com",
  messagingSenderId: "449336620904",
  appId: "1:449336620904:web:c4e9bcc561c85e9cff88dd",
};

const app = initializeApp(firebaseConfig);
export const dataBase = getFirestore(app);
export const moviesListREF = collection(dataBase, "movieData");
export const moviesReviewREF = collection(dataBase, "reviews");
export const userREF = collection(dataBase, "users");

export default app;
