// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyCq2K1Dgl8Olox_JNsIsjFfvmuz7Q0RaGw',
    authDomain: 'dotit-e4991.firebaseapp.com',
    projectId: 'dotit-e4991',
    storageBucket: 'dotit-e4991.appspot.com',
    messagingSenderId: '112293242419',
    appId: '1:112293242419:web:ddb3ebf753c5619180e546',
    measurementId: 'G-PTBHX3TDLY',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
