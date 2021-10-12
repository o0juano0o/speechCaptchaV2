import firebase from '@react-native-firebase/app';
import '@react-native-firebase/firestore';
import '@react-native-firebase/auth';
import '@react-native-firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyABGPiuNz0riYPZBOQifuvVC0qFvM9XO-I',
  projectId: 'speechcaptcha-6fec5',
  storageBucket: 'gs://speechcaptcha-6fec5.appspot.com',
  messagingSenderId: '134192878592',
  appId: '1:134192878592:android:29bf9fed2d0771a471b4e5',
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const storage = firebase.storage();
const auth = firebase.auth();

export default {
  firebase,
  storage,
  db,
  auth,
};
