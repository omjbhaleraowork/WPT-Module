let str = "5";
let i = 5;

// different data type; still doing the comparsion
// == IGNORE THE DATATYPE
if (i == str) {
  console.log("I AM TRUE AS WELL");
}

// DONT IGNORE THE DAAT TYPE
if (i === str) {
  console.log("I AM TRUE AS WELL");
} else {
  console.log("I AM FALSE, MY CASTE TYPE IS DIFFERENT");
}
