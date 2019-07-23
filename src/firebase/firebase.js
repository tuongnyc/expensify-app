import * as firebase from 'firebase';  // take all the named export and dumped into firebase object

import moment from 'moment';

// import * as expenseActions from '../actions/expenses';
// expenseActions.addExpense();  // etc.

// make a connection to the database!  The settings are from the firebase website!

console.log('++++++++++++++++++++++++++++++++++++env API KEY: ', process.env.FIREBASE_API_KEY);
var firebaseConfig = {
 /*   apiKey: "AIzaSyA9tAMVQlaXrvINBo0CsSBEVEJeEXU6_Uc",
    authDomain: "expensify-c03b5.firebaseapp.com",
    databaseURL: "https://expensify-c03b5.firebaseio.com",
    projectId: "expensify-c03b5",
    storageBucket: "expensify-c03b5.appspot.com",
    messagingSenderId: "590271464351",
    appId: "1:590271464351:web:136df91c9c72016a" */
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APPID
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const database = firebase.database();

  export { firebase, database as default };
/*
  // firebase does not support array!
  const firebaseNotes = {
      notes: {
          12: {
              title: 'First note!',
              body: 'This is my note'
          },
          jklfsf: {
              title: 'another note',
              body: 'this is my note'
          }
      }
  } */

  // push in the value!
  //database.ref('notes').push({title: 'To do', body: 'Go for a run'});
  //database.ref('notes').push({title: 'Course Topics', body: 'Python'})
/*
  database.ref('notes/-LkOyiKgSShRPhJtjuOn').remove().then(()=> {

  }).catch(error => {
      console.log('Error: ', error);
  }) */

  // adding 3 expenses
  /*
  database.ref('expenses').push({description: 'Phone Bill', note: 'July Verizon bill', amount: 5900, createdAt: moment().valueOf()})
  database.ref('expenses').push({description: 'Intrust Credit card bill', note: '', amount: 60000, createdAt: moment().valueOf()})
  database.ref('expenses').push({description: 'Saks', note: '', amount: 7400, createdAt: moment().valueOf()})


database.ref('expenses')
.once('value')
.then((snapshot) => {
    //const val = snapshot.val();
    // using forEach for the snapshot.
    const expenses = [];
    snapshot.forEach((childSnapshot) => {
        expenses.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
        });
    })
    console.log(expenses);
}).catch(error => {
    console.log('Error: ', error);
});

// seting up a subscription, such that anychanges to expenses, it will console.log
// on and off doesn't have any Promises!  Success handler as a second argument!
onValueOn = database.ref('expenses').on('value', (snapshot) => {
    const expenses = [];
    snapshot.forEach((childSnapshot) => {
        expenses.push( {
            id: childSnapshot.key,
            ...childSnapshot.val()
        })
    });
    console.log(expenses);
}) 

//using child_removed  will log out any child is removed!
database.ref('expenses').on('child_removed', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
})

//child_changed
database.ref('expenses').on('child_changed', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
})

//child_added.  Will fire one time for this first time for existing ones!  And will rerun 
// for any new child added!
database.ref('expense').on('child_added', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
})
 */