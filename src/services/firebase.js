// À compléter avec les vraies infos Firebase
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBCBq55yevKueyI2GMrbmgS4i_au5DC7yw",
  authDomain: "spacebnb-62b15.firebaseapp.com",
  projectId: "spacebnb-62b15",
  storageBucket: "spacebnb-62b15.firebasestorage.app",
  messagingSenderId: "914985828104",
  appId: "1:914985828104:web:6e545e341eff1ec712b6bd",
  measurementId: "G-GYDESJD1SZ"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
const analytics = getAnalytics(app);