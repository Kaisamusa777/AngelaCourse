// 
var grade = Math.floor(Math.random() * 101);

// combining operators
if ( grade >89 && grade <=100 ){
    console.log("Excellent, your grade is " + grade);
}
else if( grade > 80 &&  grade <= 89  ){
    console.log("Very Good, your grade is " + grade);
} 
else if(grade >69 && grade <= 80){
    console.log("You did try, thanks and your score is " + grade);
}
else{
    console.log("Sorry, keep trying. Your score is " + grade);
}