import firebase from 'firebase'
 
if (!firebase.apps.length) {
    firebase.initializeApp({
        apiKey: "AIzaSyD7FmOIqB9f1Gh6vcA2IDOoXsYQuM2kL8g",
        authDomain: "todoapp-42464.firebaseapp.com",
        databaseURL: "https://todoapp-42464.firebaseio.com",
        projectId: "todoapp-42464",
        storageBucket: "todoapp-42464.appspot.com",
        messagingSenderId: "963706295955",
        appId: "1:963706295955:web:5a97a1d08fef0a12389f66"  
    })
}
 
export default firebase