// used firebase as database instead of json as it is much more simple, also has a high popularity rate
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyDQV9tU2yBfL4iAkH7aRvTeqi6Hn8GP9XQ",
    authDomain: "blogposts-a358d.firebaseapp.com",
    projectId: "blogposts-a358d",
    storageBucket: "blogposts-a358d.appspot.com",
    messagingSenderId: "939236506397",
    appId: "1:939236506397:web:e674d7546a88254acbfff4"
  };

  const app = initializeApp(firebaseConfig);

  export const storage = getStorage(app);
  export const db = getFirestore(app); 