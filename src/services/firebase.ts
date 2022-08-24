import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyDdVtbYfb7hDdAa-l7OpT4IZWOIWI9kZQg",
  authDomain: "auth-rocketseat-a1b33.firebaseapp.com",
  projectId: "auth-rocketseat-a1b33",
  storageBucket: "auth-rocketseat-a1b33.appspot.com",
  messagingSenderId: "751741792760",
  appId: "1:751741792760:web:3f0be1a10e175cf747260d"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);