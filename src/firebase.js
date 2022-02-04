import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDK55nxQ8HBaDb_HuOQOjzfoLFtjXBnwAg",
  authDomain: "twitter-clone-e6fd0.firebaseapp.com",
  projectId: "twitter-clone-e6fd0",
  storageBucket: "twitter-clone-e6fd0.appspot.com",
  messagingSenderId: "39037409246",
  appId: "1:39037409246:web:734b0c78ffaed744e22f4f"
};

initializeApp(firebaseConfig);

const db = getFirestore();
const auth = getAuth();

export {db, auth};
