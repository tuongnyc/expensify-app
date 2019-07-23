import * as firebase from 'firebase';  // take all the named export and dumped into firebase object

// import * as expenseActions from '../actions/expenses';
// expenseActions.addExpense();  // etc.

// make a connection to the database!  The settings are from the firebase website!
var firebaseConfig = {
    apiKey: "AIzaSyA9tAMVQlaXrvINBo0CsSBEVEJeEXU6_Uc",
    authDomain: "expensify-c03b5.firebaseapp.com",
    databaseURL: "https://expensify-c03b5.firebaseio.com",
    projectId: "expensify-c03b5",
    storageBucket: "expensify-c03b5.appspot.com",
    messagingSenderId: "590271464351",
    appId: "1:590271464351:web:136df91c9c72016a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


// access to the database
firebase.database().ref().set({
    name: 'Tuong Nguyen',
    age: 26,
    stressLevel: 6,
    job: {
        title: 'Software Developer',
        company: 'Google'
    },
    isSingle: true,
    location: { 
        city: 'Manhattan',
        country: 'USA'
    }
}).then(() => {
    console.log('Data is saved');
}).catch(error => {
    console.log('error: ', error);
})

//firebase.database().ref().set('this is my data');  // set doesn't have to take an object!, it coult be anything!
firebase.database().ref('location/city').set('Wichita')

const database = firebase.database();

// set return a Promise that is empty!!
database.ref('attributes').set({height: '5.6', weight: '126 lbs'}).then(()=> {
    console.log('Data is saved!');
}).catch(error => {
    console.log('Error: ', error);
})

/*
// can only resolve or reject one at a time!
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('This is my resolved data');
        resolve('This is resolve 2nd time'); // this will be ignored because it was already resolve, only a single time!
        // only a resolve a single argument, if need multiple argument, pass it as an object
        resolve({
            name: 'Tuong',
            age: 27
        });// will be ignored.
        reject('Something went wrong');  // either resolve or reject.  Wll be ignored.
        // when reject, must be caught with then and catch.
    }, 1500)
    
});

console.log('before');

promise.then((data) => {  // dump data to screen!
    console.log(data);
}).catch(error => {  // reject will be invoke!
    console.log(error);
})

console.log('after'); */

// remove data from database!
// remove the whole database
/*
database.ref().remove().then(() => {

}).catch(error=> {
    console.log('Error: ', error)
}) */
// wiping out a specific value! remove! 
database.ref('isSingle').remove().then(() => {
    console.log('Data is removed.');
}).catch(error => {
    console.log('Error: ', error);
})
// alternatively, if set set to null, then the element get removed from the db.
database.ref('isSingle').set(null).then(() => {

}).catch(error => {
    console.log('Error: ', error);
})

// updating data, must pass an object, unlike set!
/*database.ref().update({
    name: 'Ronald',
    age: 50,
    job: 'Software developer',  // can add new attributes
    isSingle: null  // can delete an existing attribute by setting null in update!
}); */

// only update at the root location!, not going to updated nested object!
database.ref().update({
    job: 'Manager',
    'location/city': 'Boston'    // this will not wipe out other attributes in location!, just updating the city!
/*    location: {
        city: 'Boston'
    } */
})

database.ref().update({
    stressLevel: 9,
    'job/company': 'Amazon',
    'location/city': 'Seattle'
}).then(() => {

}).catch(error => {
    console.log('Error: ', error);
})

// fetching all the data!
// once return a promise with a snapshot
// argument
// once, just run it once!
database.ref()  // could be database.ref('/location/city')  just getting a city!
    .once('value')
    .then((snapshot)=> {
        const val = snapshot.val();
        console.log(val);
    })
    .catch(error => {
        console.log('Error: ', error)
    });

    // listen for any changes to the database! Don't want to use promise here
    // because it is rerun again if any changes to the database.
    // on return a function so that it could pass into off.
/*var onValueOn = database.ref().on('value', (snapshot) => {
    console.log(snapshot.val());
})

setTimeout(() => {
    database.ref('age').set(28);
}, 3500)

database.ref().off();  // cancel all subscription(on)!!
database.ref().off(onValueOn);  // this will only turn off subscription for this subscription!
*/

onValueOn = database.ref().on('value', (snapshot) => {
    const val = snapshot.val();
    console.log(`${val.name} is ${val.job.title} at ${val.job.company}`)
}) 

