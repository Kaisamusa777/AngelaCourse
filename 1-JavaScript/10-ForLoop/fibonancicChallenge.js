// var fiboSequence = [0,1,1,2,3,5];

// n = fiboSequence.length // number of items in the sequence

// while (fiboSequence <= n){
//     if ()
// }

// console.log(n)

function fibonancciGenerator(n){

    var output = [];//set the array named output to empty
    if (n ===1){
        output = [0];
    }
    else if(n ===2){
        output = [0,1];
    }
    else{
        output = [0,1];
       output.push(output[0] + output[1]); // which will be 1
    }

    return output;


}