


// create an array for button colors
var buttonColours = ["red","blue", "green", "yellow"];

// empty array
var gamePattern = [];

// create a new variable called randomChosenColour

var userClickedPattern = [];

$("btn").click(function(){

    var userChosenColour = (this).attr("id");

    userClickedPattern.push(userChosenColour)

});

//  create new function for color
function nextSequence(){

// create random number from 0-3
var randomNumber = Math.floor((Math.random() * 4));

var randomChosenColour = buttonColours[randomNumber];

gamePattern.push(randomChosenColour);


// using JQuery 

$("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100).remove("#");

// to play the sound
// var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
// audio.play();

// for button when pressed
playSound(randomChosenColour);

}

// function called playSound()

function playSound(name){

    var audio = new Audio("sounds/" + name + ".mp3");
audio.play();

}

// animate function

function animatePress(currentColour){
    // add class
   $("#" + currentColour).addClass("pressed");
    // remove class after 100 milli second
setTimeout(function(){
    $("#" + currentColour).removeClas("pressed");
}, 100);
}

// $("document").keypress(function(event){
//     //     console.log(event.key);
// keypress
$("document").keypress(function(nextSequence){
    
}


// using Jquery to select the colors based on the id in the aray



