// 1 . SORT

const fruits = ["Banana", "Orange", "Apple", "Mango"];
const numbers = [5, 2, 4, 1, -1];
fruits.sort();
// fruits.reverse();

numbers.sort((a, b) => {
  console.log("a", a);
  console.log("b", b);
});

numbers.sort((a, b) => {
  return b - a;
});

console.log("fruits", fruits);
console.log("numbers", numbers);

// 2 . MAP

// map() creates a new array from calling a function for every array element.
const numbers2 = [4, 9, 16, 25];
const newArr = numbers2.map((item) => item + 10);

console.log("newArr", newArr);

// 3 . SPLIT

// The split() method splits a string into an array of substrings.
let text = "How are you doing today?";
const myArray = text.split(" ");

console.log("myArray", myArray);

// 4 . JOIN

// The join() method returns an array as a string.
const tropicalFruits = ["Banana", "Orange", "Apple", "Mango"];
let joinFruits = tropicalFruits.join();
console.log("tropicalFruits", joinFruits);