// ১. কিভাবে let, const দিয়ে ভেরিয়েবল লিখতে হয়,কখন কোনটা ইউজ করে তুমি কি জানো ?var নামক একটা জিনিস আছে সেটাও জানতে হবে।

const fatherName = 'Ayub Ali';
let age = 24;
age = 25;
// console.log(age)


// ২.১ কিভাবে কন্ডিশন লিখতে হয়, ছয় রকমের কন্ডিশন (>, <, >=, <=, ==, !=, ===, !==) কোনটা কোন জিনিসের জন্য ইউজ করবে। এছাড়াও && বা ।। দিয়ে কিভাবে একাধিক কন্ডিশন এর মধ্যে দুইটাই ফুলফিল করতে হবে আবার দুইটার যেকোন একটা ফুলফিল করতে হবে, সেটা কিভাবে করবে।

// ২.২. এক বা একাধিক কন্ডিশন দিয়ে কিভাবে if-else লিখে আবার কখন if-else if - else লিখে। সেই রকম একটা উদারহণ চিন্তা করে তুমি লিখে ফেলো। else ছাড়া শুধু if দিয়েও কন্ডিশন লিখো। একটা if অনেকগুলা else if এবং লাস্টে একটা else এর কন্ডিশন লিখো। হতে পারে গ্রেডিং বের করার জন্য কন্ডিশন লিখবে তুমি।

if (fatherName === 'ayub Ali' || age === 26) {
    // console.log('My father is Ayub Ali')
}
else if (fatherName === 'Ayub Ali') {
    // console.log('Yes ! My father is Ayub Ali')
}
else {
    // console.log('Jani na')
}


// ৩. array কিভাবে ডিক্লেয়ার করে array এর মধ্যে length, index, push, pop, indexOf, includes এইগুলা কিভাবে কাজ করে। কোনটা দিয়ে কি করে? সেগুলা কি তুমি জানো? কোন একটা জিনিস array কিনা সেটা চেক করার সিস্টেম জানতে হবে। আরেকটু ভালো হয় slice এবং splice জানলে। আরো বোনাস কিছু জানতে চাইলে shift, unshift, join দেখতে পারো। এডভান্স হিসেবে reduce দেখতে পারো।

const numbers = [40, 30, 34, 54, 50]
// console.log(numbers);
// console.log(numbers.length);
// console.log(numbers.indexOf(54));
// numbers.push(56);
// console.log(numbers);
// numbers.pop();
// console.log(numbers);
// console.log(numbers.includes(40));
// numbers.shift();
// console.log(numbers);
// numbers.unshift(10);
// console.log(numbers);
// console.log(numbers.join())
// console.log(numbers.join(''))
// console.log(numbers.join('-'))


// ৪. দুইটা বেসিক লুপ ,এর মধ্যে for loop তোমাকে জানতেই হবে। while লুপটাও দেখে রাখতে পারো। যদিও আমরা এই দুইটা লুপই কম ইউজ করবো। তাও কখনো লাগলে যেন তুমি বুঝে ফেলতে পারো। এছাড়া কখন for of আর কখন for in ইউজ করবে সেটা তুমি জানো।

// for loop
for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    // console.log(element);
}


// ৫. function একটা অবশ্য জিনিস। বিশেষ করে সিম্পল একটা ফাংশন কখন ডিক্লেয়ার করতে হয়। কখন ফাংশন থেকে return করে। আর কখন করে না। আর কিভাবে ফাংশন এর মধ্যে parameter নিতে হয়। কিভাবে কল করে। ফাংশন এর রিটার্ন কোন ভেরিয়েবলে রেখে সেই ভেরিয়েবল নিয়ে কিভাবে কাজ করে।

function sum(num1, num2) {
    const result = num1 + num2;
    return result;
}

const output = sum(10, 20);
// console.log(output);


// ৬. আখেরি রত্ন হচ্ছে Object তাই কোন একটা অবজেক্ট কিভাবে ডিক্লেয়ার করে। সেখান property কিভাবে কিভাবে একসেস করা যায়। এছাড়াও অবজেক্ট এর প্রপার্টি এর ভ্যালু হিসেবে কিভাবে array, object ইউজ করা যায়।

// object 
const students = {
    name: 'Sakib Khan',
    age: 32,
    movie: ['King khan', 'Dhakar Mastan']
}

const myVariabe = 'age';
// 3 ways to access property by name
console.log(students.age); // direact by property
console.log(students['age']); //access by property name string
console.log(students[myVariabe]); //access by property name in a variable
