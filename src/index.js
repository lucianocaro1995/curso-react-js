import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBapzRlJ2E09no_msv1SWFCUfL8dF2AtTI",
    authDomain: "primer-react-b95fe.firebaseapp.com",
    projectId: "primer-react-b95fe",
    storageBucket: "primer-react-b95fe.appspot.com",
    messagingSenderId: "647776262182",
    appId: "1:647776262182:web:f9baa74bb24eeb05986ee7"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);