// 1. Array destructuring 
const numbers = [52, 65];
// const [x, y] = [52, 65];
const [x, y] = numbers;
console.log(x, y);

// 1. Object destructuring 

const students = {
    name: 'Sakib Khan',
    age: 32,
    movie: ['King khan', 'Dhakar Mastan'],
    movies: { f: 'King khan', s: 'Dhakar Mastan' }
}

const { name, age } = students;
const { f, s } = students.movies;
console.log(name, age);
console.log(f, s);