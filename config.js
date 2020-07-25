import firebase from 'firebase';
require('@firebase/firestore')

const firebaseConfig = {
  apiKey: "AIzaSyAF-IdCaNzKAJcpGotlnbVvwB67KMIhQ_M",
  authDomain: "barter-app-7a137.firebaseapp.com",
  databaseURL: "https://barter-app-7a137.firebaseio.com",
  projectId: "barter-app-7a137",
  storageBucket: "barter-app-7a137.appspot.com",
  messagingSenderId: "1035266603526",
  appId: "1:1035266603526:web:2860bd0848ddffef7ee187"
};

  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
