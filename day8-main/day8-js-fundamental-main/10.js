// Named Function
function patternDemo(p1) {
  let pattern = "";
  for (let i = 0; i < p1; i++) {
    pattern = pattern + "*";
    console.log(pattern);
  }
}

patternDemo(15);
