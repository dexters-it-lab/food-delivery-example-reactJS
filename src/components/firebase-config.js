import { initializeApp } from 'firebase/app';
import { getFirestore } from '@firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDtNM-o8oY9D6q_8wRkTxlRACQKjy-RfPs",
    authDomain: "fir-recap-5575b.firebaseapp.com",
    projectId: "fir-recap-5575b",
    storageBucket: "fir-recap-5575b.appspot.com",
    messagingSenderId: "535857823558",
    appId: "1:535857823558:web:51ba3a070bb16301ee6f47"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
