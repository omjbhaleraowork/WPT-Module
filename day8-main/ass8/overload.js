function greet(name) {
    console.log(`Hello, ${name}!`);
  }
  
  greet("John");
  
  function greet(name) {
    console.log(`Hello, ${name}!`);
  }
  
  function greetMultiple(names) {
    names.forEach((name) => greet(name));
  }
  
  greetMultiple(["John", "Alice", "Bob"]);
  

  function greet(name = "Guest") {
    console.log(`Hello, ${name}!`);
  }
  
  greet(); 
  greet("John"); 
  