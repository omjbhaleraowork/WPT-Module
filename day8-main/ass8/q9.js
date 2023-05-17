const anonymousFunction = function() {
    console.log("This is an anonymous function.");
  };
  
  anonymousFunction();
  const overloadedFunction = function(param1) {
    if (param1 === undefined) {
      console.log("No parameter passed.");
    } else {
      console.log("Parameter value:", param1);
    }
  };
  
  overloadedFunction();
  overloadedFunction("Hello");
  
  const functionWithDefault = function(param1 = "Default value") {
    console.log("Parameter value:", param1);
  };
  
  functionWithDefault();
  functionWithDefault("Custom value");
  