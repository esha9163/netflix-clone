import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
const firebaseConfig = {
    apiKey: "AIzaSyCHnUCeF2dtFNEQPvAMmFR2P7egbnY3cnA",
    authDomain: "netflix-clone-d2581.firebaseapp.com",
    projectId: "netflix-clone-d2581",
    storageBucket: "netflix-clone-d2581.appspot.com",
    messagingSenderId: "314133129744",
    appId: "1:314133129744:web:32cc0552fda4abb0c13895",
    measurementId: "G-3YYFQ3SV28"
  };
  const app = initializeApp(firebaseConfig);
  export const firebaseAuth = getAuth(app);
  