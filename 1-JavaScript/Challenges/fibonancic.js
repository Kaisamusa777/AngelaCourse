
function fibonaccicGenerator(n){   // function
var output = []; // create empty array

if (n === 1){
    output = [0]; // set the output to be [0], if the number of item in the array is 1
 
} 
else if(n === 2){
    output = [0,1]; // set the output to be [0,1], if the number of item in the array is 2
}
else {
    output = [0,1,2];// to begin, cuz this is the start of the sequence
    for (var i = 2; i < n; i++) //creates a variable in the loop that equals the array
    { 
        // output.push puts an iteam at the end of the items in the array
        output.push(output[output.length -2] + output[output.length - 1]);//sum closer previous item and later item by one another

    }
    
}

return output;
 
}

console.log(fibonaccicGenerator(30));