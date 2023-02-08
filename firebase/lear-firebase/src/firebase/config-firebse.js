// Import the functions you need from the SDKs you need

import { getFirestore } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyAsChEqGtAs3-JN-qhU2X6bNmUrqeGLEgs',
	authDomain: 'firebse-tutorial-311c5.firebaseapp.com',
	projectId: 'firebse-tutorial-311c5',
	storageBucket: 'firebse-tutorial-311c5.appspot.com',
	messagingSenderId: '62347585146',
	appId: '1:62347585146:web:34ef7e1a1b814962a27dc3',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
