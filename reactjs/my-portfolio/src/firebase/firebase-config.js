// Import the functions you need from the SDKs you need

import { apiKeyFirebase } from '../api/config';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: apiKeyFirebase,
  authDomain: 'my-portfolio-7581e.firebaseapp.com',
  projectId: 'my-portfolio-7581e',
  storageBucket: 'my-portfolio-7581e.appspot.com',
  messagingSenderId: '821140260943',
  appId: '1:821140260943:web:67ac0047635a511ed5c23a',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
