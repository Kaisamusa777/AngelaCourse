// Coding challenge #4: Print all the multiplication tables with numbers from 1 to 10

// My attempts start

console.log(" Times Table\t");
for (var a= 1; a <= 10; a++){
    for (var b = 1; b <= 10; b++){

        var product = (a * b);
        
        console.log(a + " * " + b + " = " + product);
        console.log("\n")

    }
}

// My attempts end

// solution starts
// for(var i = 1; i <= 10; i++)
// {
//     printTable(i);
//     console.log("");
// }

// function printTable(n)
// {
//     for(var i = 1; i <= 10; i++)
//     {
//         var row = n + " * " + i + " = " + n * i;
//         console.log(row);
//     }
// }
// solution ends