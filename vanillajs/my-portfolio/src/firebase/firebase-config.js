// Import the functions you need from the SDKs you need

import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyCz_Q_FOJkgJFJ1OkvENwbt-iRaxHN9xTg',
	authDomain: 'vanillajs-my-portfolia.firebaseapp.com',
	projectId: 'vanillajs-my-portfolia',
	storageBucket: 'vanillajs-my-portfolia.appspot.com',
	messagingSenderId: '801153762318',
	appId: '1:801153762318:web:73e6de29a651ff6c2ba85f',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
