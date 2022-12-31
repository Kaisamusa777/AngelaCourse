
// Previously, we've created a function that is able to calculate the BMI. But once we get a result, we will want to tell the user what the number means.

// Write a function that outputs (returns) a different message depending on the BMI.

// BMI <18.5, the output should be: "Your BMI is <bmi>, so you are underweight."

// BMI 18.5-24.9, the output should be "Your BMI is <bmi>, so you have a normal weight."

// BMI >24.9, the output should be "Your BMI is <bmi>, so you are overweight."

// The message MUST be returned as an output from your function. You should NOT NEED to use alert, prompt or console.log in this challenge.

// IMPORTANT the message wording has to match precisely for the code to pass the validation. Including punctuation and capitalisation.


//my simple program 
// var weight = 100;
// var height =3;
// var BMI = (weight / Math.pow(height, 2)); // sets the formula for the BMI calculator, hence weight over the square of height

// if (BMI < 18.5){
// console.log("Your BMI is " + BMI + ", so you are underweight");
// }
// else if (BMI >  18.5 && BMI < 24.9){
//    console.log(" Your BMI is " + BMI + ", so you have a normal weight.");
// }
// else {
//     console.log(" Your BMI is " + BMI + ", so you are overwieght. ");
// }

function BMICalculator( weight, height){

    // var weight = 100;
    // var height =3;
    var BMI = (weight / Math.pow(height, 2)); // sets the formula for the BMI calculator, hence weight over the square of height

    if (BMI < 18.5){
return "Your BMI is " + BMI + ", so you are underweight";
    }
    else if (BMI >  18.5 && BMI < 24.9){
        return " Your BMI is " + BMI + ", so you have a normal weight.";
    }
    else {
        return " Your BMI is " + BMI + ", so you are overwieght. ";
    }
}

console.log(BMICalculator(5400,4)); // calling the function, but passing in the perimeter




