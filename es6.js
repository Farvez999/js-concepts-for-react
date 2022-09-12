// ES6 রিলেটেড সাতটা জিনিস তোমাকে জানতে হবে

// ১. একটা টেম্পলেট স্ট্রিং দিয়ে একটা স্ট্রিং ভেরিয়েবল ডিক্লেয়ার করো। সেটার মধ্যে অবজেক্ট এর প্রপার্টি এর মান কিভাবে বসায় সেটা জানতে হবে। বিশেষ করে নেস্টেড অবজেক্ট আছে সেটার প্রপার্টি থেকে। বা কোন একটা অবজেক্ট এর প্রপার্টি array সেই array থেকে ভ্যালু এনে কিভাবে টেমপ্লেট স্ট্রিং এর মধ্যে বসাতে পারবে ।

const numbers = [40, 30, 34, 54, 50]
const students = {
    name: 'Sakib Khan',
    age: 32,
    movie: ['King khan', 'Dhakar Mastan']
}

const about = `My name is ${students.name} and my age ${students.age} and I liked ${students.movie[0]} movies. My favorite number ${numbers[4]}`
// console.log(about)


// ২. স্প্রেড অপারেটর (...) কিভাবে কাজ করে। বিশেষ করে একটা array কে কপি করে নতুন করে array বানাবে এবং সেখানে একটা উপাদান যোগ করবে। আবার একটা উপাদান কে বাদ দিয়ে বাকি সব উপাদানকে কিভাবে যোগ করবে (filter ইউজ করে)

// array function 
const fiftyFive = () => 55;
const sixtyFive = num => num + 55;
const isEven = x => x % 2 === 0;
const addThree = (x, y, z) => x + y + z;
const doMath = (num1, num2) => {
    const sum = num1 + num2;
    return sum;
}

// Spread operator
const newNumbers = [...numbers];
console.log(numbers);
console.log(newNumbers);

const currentNumbers = [...numbers, 55];
console.log(currentNumbers);