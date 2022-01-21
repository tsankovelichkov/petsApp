import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCf7_fUgmNBDBo_vZ0FitXJqWPRoQrPcs4",
  authDomain: "petapp-d9912.firebaseapp.com",
  projectId: "petapp-d9912",
  storageBucket: "petapp-d9912.appspot.com",
  messagingSenderId: "558869766952",
  appId: "1:558869766952:web:2f1a5336f884b87183661d"
};

firebase.initializeApp(firebaseConfig)

firebase.auth().onAuthStateChanged((user)=>{
    if(user) {
        console.log('levski')
    } else {
        console.log('sVine')
    }
})

export default firebase
