//Arrow Function:

const arrowFunction = () => {
    console.log("This is an arrow function.");
  };

  arrowFunction();

    //Overloaded Arrow Function:
  const overloadedArrowFunction = (param1) => {
    if (param1 === undefined) {
      console.log("No parameter passed.");
    } else {
      console.log("Parameter value:", param1);
    }
  };
  //Arrow Function with Default Value:
  overloadedArrowFunction();
  overloadedArrowFunction("Hello");
  const arrowFunctionWithDefault = (param1 = "Default value") => {
    console.log("Parameter value:", param1);
  };
  
  arrowFunctionWithDefault();
  arrowFunctionWithDefault("Custom value");
  