// object destructuring

// const person = {
//   name: "Nabil",
//   age: 26,
//   location: {
//     city: "toronto",
//     temp: 74,
//   },
// };

// const { name: firstName = "baba", age } = person;
// console.log(`${firstName} is ${age}.`);

// const { city, temp: temperature } = person.location;

// console.log(`its ${temperature} in ${city}.`);

// array destructuring
const address = ["1299 S Juniper St", "Toronto", , "19147"];

const [, city, state = "vancouver"] = address;

console.log(`you are in ${city} ${state}.`);
