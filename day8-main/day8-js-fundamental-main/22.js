function addition(n1, n2) {
  return n1 + n2;
}

// Function expression :: An example of annonymous
let add = function (n1, n2) {
  return n1 + n2;
};

// Arrow Function
(n1, n2) => {
  return n1 + n2;
};

// Single Line Arrow Function, return keyword not required!!!
let add2 = (n1, n2) => n1 + n2;

let total = add2(10, 20);
console.log(total);
