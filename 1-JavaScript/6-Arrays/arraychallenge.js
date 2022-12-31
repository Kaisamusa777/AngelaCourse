
const prompt = require("prompt-sync")(); // this is needed to take any prompt

// checking whether a certain name is on the list
// var Name = "Abraham";
var family =["Musa", "Amara", "Sekou"];  // list of names

var Name = prompt("What is your name? ");


if (family.includes(Name)){

    console.log(" Welcome to our home. " + Name  + ", Your name is on the list");
} else{
    console.log(Name + ", sorry, your name is not on our list. ");
}



