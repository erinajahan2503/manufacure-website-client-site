import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyA8xI-dqmhtNn6DRA8mPPZN3uM19eeWIaA",
    authDomain: "flower-fair.firebaseapp.com",
    projectId: "flower-fair",
    storageBucket: "flower-fair.appspot.com",
    messagingSenderId: "394674623311",
    appId: "1:394674623311:web:931a08cab47b2fb3c62b3a",
    measurementId: "G-PD01PZTVV0"

};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export default app