let star = "";
for (let i = 0; i < 5; i++) {
  star = star + "*";
  console.log(star);
}

let stars = "*****";
for (let i = 0; i < 5; i++) {
  console.log(star);
  star = star.slice(0, -1);
}
