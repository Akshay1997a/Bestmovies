import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyBObyrohHRWrUxKYy49Bc1WMyNBIz-BXWM",
  authDomain: "https://bestmovies-47f7c.firebaseapp.com",
  projectId: "bestmovies-47f7c",  
  storageBucket: "bestmovies-47f7c.appspot.com",
  messagingSenderId: "56473424541",
  appId: "1:56473424541:ios:a5e1470d11c22f5f51ba74",

};
firebase.initializeApp(config);


export default firebase;