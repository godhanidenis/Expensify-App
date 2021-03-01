import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBc2vHIZE3zMZ5RrV85cKSR8kg4t1_dsJ0",
    authDomain: "expensify-f1a78.firebaseapp.com",
    databaseURL: "https://expensify-f1a78-default-rtdb.firebaseio.com",
    projectId: "expensify-f1a78",
    storageBucket: "expensify-f1a78.appspot.com",
    messagingSenderId: "1011844286854",
    appId: "1:1011844286854:web:9c4c6757289ba516ba4407",
    measurementId: "G-JMNTTPF27M"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database       = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

export { firebase , googleAuthProvider, database as default }

// database.ref('expenses')
//     .once('value')
//     .then((snapshot) => {
//         const expenses = [];

//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });
//         console.log(expenses);
//     });

// database.ref('expenses')
//     .on('value', (snapshot) => {
//         const expenses = [];

//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });
//         console.log(expenses);
//     });

// database.ref('expenses').push({
//     description: 'First note!',
//     note: 'This is my First note',
//     amount:50,
//     createdAt:976123498763
// });

// database.ref('expenses').push({
//     description: 'Second note!',
//     note: 'This is my Second note',
//     amount:550,
//     createdAt:976123498763
// });

// database.ref('expenses').push({
//     description: 'Third note!',
//     note: 'This is my Third note',
//     amount:510,
//     createdAt:976123498763
// });

// const notes = [
//     {
//         id: '1',
//         title: 'First note!',
//         body: 'This is my First note'
//     },
//     {
//         id: '2',
//         title: 'Second note!',
//         body: 'This is my Second note'
//     }
// ];



// database.ref('notes').set(notes);




// database.ref().on('value', (snapshot) => {
//     const val = snapshot.val();
//     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// }, (e) => {
//     console.log('Error with data fatching :', e);
// });

// const onValueChange = database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val());
// }, (e) => {
//     console.log('Error with data fatching :', e);
// });

// setTimeout(() => {
//     database.ref('age').set(29);
// }, 3500);

// setTimeout(() => {
//     database.ref().off('value', onValueChange);
// }, 7000);

// setTimeout(() => {
//     database.ref('age').set(30);
// }, 10500);

// database.ref('location/city').
//     once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     })
//     .catch(() => {

//     });

//set returns promises so we can attach then and catch.
// database.ref().set({
//     name: 'Denis Godhani Jagdishbhai',
//     age: 23,
//     stressLevel: 6,
//     job: {
//         title : 'Software developer',
//         company: 'Apple'
//     },
//     location: {
//         city: 'Surat',
//         country: 'India'
//     }
// }).then(() => {
//     console.log('Data is saved!!');
// }).catch((e) => {
//     console.log('This faild.', e)
// });

// database.ref().update({
//     job: 'Manager',
//     'location/city': 'Ahmedabad'
// });

// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Delhi'
// });

// database.ref('isSingle')
//         .remove()
//         .then(() => {
//             console.log('Data was removed');
//         })
//         .catch((e) => {
//             console.log('Did not remove data', e);
//         });

// export default firebase;