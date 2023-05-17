function exampleFunction(...params) {
    console.log("Input parameters:");
    console.log("param1:", params[0]);
    console.log("param2:", params[1]);
    console.log("param3:", params[2]);
  }
  
  // Pass all parameters
  exampleFunction("Value for param1", "Value for param2", "Value for param3");
  
  // Pass fewer parameters
  exampleFunction("Value for param2");
  
  // Define function with default values
  function exampleFunctionWithDefault(param1 = "Default value for param1", param2 = "Default value for param2", param3 = "Default value for param3") {
    console.log("Input parameters:");
    console.log("param1:", param1);
    console.log("param2:", param2);
    console.log("param3:", param3);
  }
  
  // Accept fewer parameters and pass more parameters
  exampleFunctionWithDefault("Custom value for param1");
  
  // Pass all parameters
  exampleFunctionWithDefault("Custom value for param1", "Custom value for param2", "Custom value for param3");
  