// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDxRIsM8vsWGe0u-WS2ZM3ZoFKq8tmQKl4",
    authDomain: "genius-car-services-73cf1.firebaseapp.com",
    projectId: "genius-car-services-73cf1",
    storageBucket: "genius-car-services-73cf1.appspot.com",
    messagingSenderId: "139484341472",
    appId: "1:139484341472:web:517b3d50d323f8fc635c85"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default app;