// JSON 
const students = {
    name: 'Sakib Khan',
    age: 32,
    movie: ['King khan', 'Dhakar Mastan']
}

const studentsJSON = JSON.stringify(students);
// console.log(students);
// console.log(studentsJSON);
const studentsOBJ = JSON.parse(studentsJSON);
// console.log(studentsOBJ);

// Fetch
// fetch(url)
//     .then(res => res.json())
//     .then(data => console.log(data));

// Keys,values
const keys = Object.keys(students);
const value = Object.values(students);
console.log(keys, value)