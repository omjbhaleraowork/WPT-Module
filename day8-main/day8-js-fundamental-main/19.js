function register({ username, email = "d@d", mobile = "d", aaddhar }) {
  console.log(username);
  console.log(email);
  console.log(mobile);
  console.log(aaddhar);
}

// ORDER OR INDEX DRIVEN, PARAM DRIVEN
let username = "rohit";
let email = "rohit@adfdf.ocm";
let mobile = "1212121";
let aaddhar = "R1212121212";
register({ aaddhar, username });
