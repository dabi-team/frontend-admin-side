
  
import firebase from "firebase";
import "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "dabi-team.firebaseapp.com",
  projectId: "dabi-team",
  storageBucket: "dabi-team.appspot.com",
  messagingSenderId: "985950108389",
  appId: "1:985950108389:web:fecff792393589316a720c",
  measurementId: "G-H8GE8F0CRC"
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase as default };