// Simple loop
for (let i = 0; i < 10; i++) {
  console.log("Hello");
}
console.log("###################");

// list :: ArrayList in java
let list = ["delhi", "kochi", "tvdm", "pune"];

// Approach 1
for (let i = 0; i < list.length; i++) {
  let item = list[i];
  console.log(item);
}

console.log("###################");

// Approach 2
for (let item of list) {
  console.log(item);
}

// Approach 3 :: lamda and stream
list.forEach(console.log);

// () => {} :: ARROW FUNCTION
list.forEach((item) => console.log(item));

// 1. Collection has method, forEach function
// 2. Arrow Function, Lamda Function
// 2. Passing arrow function to another function as parameter (Callback)
