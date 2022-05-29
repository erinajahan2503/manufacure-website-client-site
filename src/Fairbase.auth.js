import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyDsgCikfxqD4VPWD8Ff8txKkILhLC_9FZw",
    authDomain: "computer-hardware-fair.firebaseapp.com",
    projectId: "computer-hardware-fair",
    storageBucket: "computer-hardware-fair.appspot.com",
    messagingSenderId: "428039129714",
    appId: "1:428039129714:web:5d21406b4b68f38feb10eb",
    measurementId: "G-JM30C1C6ZW"

};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export default app