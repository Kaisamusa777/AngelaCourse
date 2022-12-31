// create a random number

var randomNumber1 = Math.floor(Math.random() * 6) + 1;//1-6
var randomDiceImage = "dicee" + randomNumber1 + ".png";// dice1.png-dice6.png.  use random number to select a random image from the image folder

var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src",randomImageSource); //change the source in the dicee.html to randomImageSource.



var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png"; //to make it simple than the other ones

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


// deciding the winner
if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Play 1 Wins!"
}

else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "Play 2 Wins!"
}
else{
    document.querySelector("h1").innerHTML = "Draw!";
}















// var randomNumber1 = Math.floor(Math.random() * 6 ) + 1 ;
// var randomDiceImage = "dicee " + randomNumber1 + ".png";
// var randomImageSource = "images/" + randomDiceImage;

// var image1 = document.querySelectorAll("img")[0];

// image1.setAttribute("src", randomImageSource);


// var randomNumber2 = Math.floor(Math.random() * 6) + 1;
// var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

// document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


// // if player 1 wins
// if (randomNumber1 > randomNumber2){
//     document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
// }

// else if(randomNumber2 > randomNumber1) {
//     document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
// }

// else{
//     document.querySelector("h1").innerHTML = "Draw!";
// }


// console.log(randomNumber1);
// use the randomNumber1 to pick the images from dice1 to dice6

// if (randomNumber1 ===1){
//     document.getElementsByClassName("./images/dice1.png");
// }

