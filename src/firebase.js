// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB9HV_LuAbiYGPyGk3vi0c4oCJtUx2RGLM",
  authDomain: "automarizacao.firebaseapp.com",
  projectId: "automarizacao",
  storageBucket: "automarizacao.firebasestorage.app",
  messagingSenderId: "556950103594",
  appId: "1:556950103594:web:e72693bf918236e014c553",
  measurementId: "G-22XG9K3ZZ7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// const analytics = getAnalytics(app);

const budgetsCollections = collection(db, "budgets");

export { budgetsCollections, getDocs, db };
