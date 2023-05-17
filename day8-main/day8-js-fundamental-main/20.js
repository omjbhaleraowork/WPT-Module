function register({ username, aaddhar }) {
  console.log(username);
  console.log(aaddhar);
}

// ORDER OR INDEX DRIVEN, PARAM DRIVEN
let username = "rohit";
let email = "rohit@adfdf.ocm";
let mobile = "1212121";
let aaddhar = "R1212121212";
register({ aaddhar, mobile, email, username });
