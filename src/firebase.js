import firebase from 'firebase/app'
import 'firebase/app'
import 'firebase/database'

const config = {
    apiKey: "AIzaSyDcERzkhacQKZR3KXclGb98EGpqcvKUlx4",
    authDomain: "mcity-d58f7.firebaseapp.com",
    databaseURL: "https://mcity-d58f7.firebaseio.com",
    projectId: "mcity-d58f7",
    storageBucket: "mcity-d58f7.appspot.com",
    messagingSenderId: "965137014374"
};
firebase.initializeApp(config);

const firebaseDB = firebase.database()
const firebaseMatches = firebaseDB.ref('matches')
const firebasePromotions = firebaseDB.ref('promotions');

export {
    firebase,
    firebaseMatches,
    firebasePromotions
}