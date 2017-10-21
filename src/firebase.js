import Firebase from 'firebase'
import fireStore from 'firebase/firestore'

const firebaseApp = Firebase.initializeApp({
  apiKey: "<YOUR API KEY>",
  authDomain: "<YOUR AUTH DOMAIN>",
  databaseURL: "<YOUR DATABASE URL>",
  projectId: "<PROJECT ID>",
  storageBucket: "<STORAGE BUCKET>",
  messagingSenderId: "<MESSAGE SENDER ID>"
})


export const db = firebaseApp.database();
export const cloud = firebaseApp.firestore();
export const auth = firebaseApp.auth();
