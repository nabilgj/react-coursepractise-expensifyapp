import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGE_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID,
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();

export { firebase, database as default };

// database.ref("notes/-MFuordnzD2jJQ4yrAJr").remove();

// database
//   .ref("expenses")
//   .once("value")
//   .then((snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childsnapshot) => {
//       expenses.push({
//         id: childsnapshot.key,
//         ...childsnapshot.val(),
//       });
//     });

//     console.log(expenses);
//   });

// database.ref("expenses").on("value", (snapshot) => {
//   const expenses = [];

//   snapshot.forEach((childsnapshot) => {
//     expenses.push({
//       id: childsnapshot.key,
//       ...childsnapshot.val(),
//     });
//   });
//   console.log(expenses);
// });

// child_removed
// database.ref("expenses").on("child_removed", (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// child_changed
// database.ref("expenses").on("child_changed", (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// child_added
// database.ref("expenses").on("child_added", (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref("expenses").push({
//   description: "fries",
//   note: "buying fries",
//   amount: 1500,
//   createdAt: 25000,
// });

// database.ref("notes").push({
//   title: "Course topic",
//   body: "react redux material firebase",
// });

// database.ref("notes").set(notes);
// database.ref("notes/1");

// database.ref().on("value", (snapshot) => {
//   const val = snapshot.val();
//   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}.`);
// });

// const onValueChanged = database.ref().on(
//   "value",
//   (snapshot) => {
//     console.log(snapshot.val());
//   },
//   (e) => {
//     console.log("Err", err);
//   }
// );

// setTimeout(() => {
//   database.ref("age").set(21);
// }, 3000);

// setTimeout(() => {
//   database.ref().off(onValueChanged);
// }, 5000);

// setTimeout(() => {
//   database.ref("age").set(30);
// }, 7000);

// database
//   .ref("location")
//   .once("value")
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch((err) => {
//     console.log("fetching data failed", err);
//   });

// database
//   .ref()
//   .set({
//     name: "Nabil Ahmed",
//     age: 26,
//     job: {
//       title: "Software developer",
//       company: "Saphera",
//     },
//     stressLevel: 6,
//     isSingle: false,
//     location: {
//       city: "Toronto",
//       province: "Ontario",
//       country: "Canada",
//     },
//   })
//   .then(() => {
//     console.log("data is saved!");
//   })
//   .catch((err) => {
//     console.log("this failed!", err);
//   });

// database
//   .ref("attributes")
//   .set({
//     height: "168cm",
//     weight: "153lb",
//   })
//   .then(() => {
//     console.log("second set call worked!");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// console.log("i made a request to change the data");

// database
//   .ref()
//   .remove()
//   .then(() => {
//     console.log();
//   })
//   .catch((err) => {
//     console.log("unable to remove");
//   });

// database.ref("isSingle").set(null);

// database.ref().update({
//   stressLevel: 9,
//   "job/company": "Amazon",
//   "location/city": "Seattle",
//   "location/country": "United State",
//   "location/province": null,
// });
