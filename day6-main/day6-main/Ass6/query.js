function addnewmsg(){
    let msg =document.querySelector("#divid");
    let existingValue =msg.innerHTML;

    let msgtag = document.querySelector("#messageId1");
let message = msgtag.value;

    let newValue = "<h1>" + message + "</h1>";

    msg.innerHTML=existingValue + newValue;
}