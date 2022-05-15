import {getApp , getApps , initializeApp} from "firebase/app"
import { getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"





const firebaseConfig = {
    apiKey: "AIzaSyCZBlU8EJKWewtlsTx5w7unlaAUYsFt2zE",
    authDomain: "food-app-cc7ad.firebaseapp.com",
    databaseURL: "https://food-app-cc7ad-default-rtdb.firebaseio.com",
    projectId: "food-app-cc7ad",
    storageBucket: "food-app-cc7ad.appspot.com",
    messagingSenderId: "953559347795",
    appId: "1:953559347795:web:412c62eb1dddb14e550ca6",
    measurementId: "G-X3BJ7JW65G"
  };

  const app = getApps.length>0 ? getApp() : initializeApp(firebaseConfig);

  const firestore = getFirestore(app);

  const storage = getStorage(app);

  export { app , firestore , storage }
  