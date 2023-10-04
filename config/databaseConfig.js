import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

//web applink's firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbX4itWiWbXVoimw1tDMWW_qe4Qg6HAT8",
  authDomain: "applink-43d15.firebaseapp.com",
  databaseURL: "https://applink-43d15-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "applink-43d15",
  storageBucket: "applink-43d15.appspot.com",
  messagingSenderId: "153787526424",
  appId: "1:153787526424:web:25bf8ecf5d4ba10a9a826d",
  measurementId: "G-KBFD97HCTD"
};

if (!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export {firebase}