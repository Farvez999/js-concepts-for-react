const name = 'Hero'; const age = 34;
const person1 = { name, age }; console.log(person1);


// What is the value of ratName?

const adventurer = { name: 'Alice', cat: { name: 'Lucy' } };
const ratName = adventurer?.rat?.name;
console.log(ratName)

let person = null;
console.log(person ? person : "person is null");
// What will be the output of the above code?


const obj = { a: 1 };
console.log(Object.keys(obj).length === 0);
// What will be the output?