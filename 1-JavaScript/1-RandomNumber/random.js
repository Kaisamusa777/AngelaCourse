// creating a random number
// however, math.random does not reach to 1.
var n = Math.random(); // sets the random number to n
n = n * 6;
n = Math.floor(n) + 1; // makes the decimal changes to whole number, hence it will reach to six instead
console.log(n); // outputs the random number 
// however, it will not get an actual random number
// random number, pseudo random number

// console.log(Math.random());
