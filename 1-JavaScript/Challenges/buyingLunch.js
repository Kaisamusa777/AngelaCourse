// buying lunch challenge
// write a program that selects anyone randomly, that will buy lunch

var names = ["Musa", "Amara", "Sekou", "Abbas", "Manegbeh"]; // array stores the names

var numbersOfPeople = names.length; // stores the length of items in the array
var randomNamesPosition = Math.floor(Math.random() * numbersOfPeople); // stores the randomnization
var randomPerson = names[randomNamesPosition] ;// stores the name with a random number

console.log(randomPerson);
// console.log(names.randomNames());