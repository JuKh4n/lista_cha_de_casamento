import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getDatabase, ref, get, child, update } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyATwcOXOREQXaVspLs--9tXGgqptg5z-kA",
    authDomain: "chacasamento0825.firebaseapp.com",
    databaseURL: "https://chacasamento0825-default-rtdb.firebaseio.com",
    projectId: "chacasamento0825",
    storageBucket: "chacasamento0825.firebasestorage.app",
    messagingSenderId: "444984830139",
    appId: "1:444984830139:web:c64929b10eafa4994e219e",
    measurementId: "G-N1LWZTFXSB"
  };

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db, ref, get, child, update };
