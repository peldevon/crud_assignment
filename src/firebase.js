import * as firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyB-bCenj6SaRtT9RllUA82CQ6s07yu3FR0",
  authDomain: "cmse514-crud-operation.firebaseapp.com",
  databaseURL: "https://cmse514-crud-operation-default-rtdb.firebaseio.com",
  projectId: "cmse514-crud-operation",
  storageBucket: "cmse514-crud-operation.appspot.com",
  messagingSenderId: "686336792847",
  appId: "1:686336792847:web:ccccf1000adfe365dd867a"
};
  
  // Initialize Firebase
  var fireDb = firebase.initializeApp(firebaseConfig);

  export default fireDb.database().ref();