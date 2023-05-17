function Message(message) {
  this.message = message;
  this.timestamp = new Date();

  let date = new Date();

  // this.formatedTimestamp = `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`;
  this.formatedTimestamp = `${date.getHours()}:${date.getMinutes()}`;
}

let m1 = new Message("Hello");
console.log(m1);
