var a =1;
var b = "1";
typeof(a); // typeof displays the kind of variables a values is
console.log(typeof(a)); // this is a number
console.log(typeof(b)); // this is a string

// == does not care about data types
// === cares about data types

if ( a === b){
    console.log("Yes");
} else{
    console.log("No");
}
    
