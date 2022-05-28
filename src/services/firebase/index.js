import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDoO53wWZ6YAcN8zZ4aQ_dh0LmRj6IDAoc",
  authDomain: "foodieland-3b1ed.firebaseapp.com",
  databaseURL: "https://foodieland-3b1ed-default-rtdb.firebaseio.com",
  projectId: "foodieland-3b1ed",
  storageBucket: "foodieland-3b1ed.appspot.com",
  messagingSenderId: "925479010520",
  appId: "1:925479010520:web:595bb2055c0c23593357ad",
  measurementId: "G-2W6B9JQN32",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app);
