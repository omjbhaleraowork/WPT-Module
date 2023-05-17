function exampleFunction(param1, param2, param3) {
    // Using conditional statements
    if (param1 === undefined) {
      param1 = "Default value for param1";
    }
  
    // Using the logical OR operator
    param2 = param2 || "Default value for param2";
  
    // Using the logical OR operator with a default value
    param3 = param3 || "Default value for param3";
  
    console.log("Input parameters:");
    console.log("param1:", param1);
    console.log("param2:", param2);
    console.log("param3:", param3);
  }
  
  // Call with no parameters
  exampleFunction();
  
  // Call with some parameters
  exampleFunction("Custom value for param1", "Custom value for param2");
  
  // Call with all parameters
  exampleFunction("Custom value for param1", "Custom value for param2", "Custom value for param3");
  