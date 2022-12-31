
//  alert("Fear Allah");
// document.querySelector(".set,.button").addEventListener("click",handleClick); // calling the button, and what we want to do with it follows after
// addEventListener is an attribute, takes in the perimeter click, with the function handleClick.
// higher order function = function that takes other function

// Adding event listener starts

// function myDrum()

// Detecting Button Press
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i<numberOfDrumButtons; i++){

document.querySelectorAll(".drum")[i].addEventListener("click", function(){
    
    var buttonInnerHTML =this.innerHTML;
    makeSound(buttonInnerHTML);
    
    
  

});

}

// Detecting Keyboard Press

document.addEventListener("keypress", function(event) {
    
   makeSound(event.key);
});


function makeSound(key){


    switch(key){
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
        break;

        case "a":
            var tom2 = new Audio ("sounds/tom-2.mp3");
            tom2.play();
        break;

        case "s":
            var tom3 = new Audio ("sounds/tom-3.mp3");
            tom3.play();
        break; 

        case "d":
            var tom4 = new Audio ("sounds/tom-4.mp3");
            tom4.play();
        break; 
        
        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
        break;

        case "k":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
        break;

        case "l":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
        break;

        default:console.log();
    }
}




// color=white;
//     //this is meant specifically for what ever that is clicked
// //   console.log(this.style.color = "");
//   this.style.color = "blue";

// var musaSound = new Audio("sounds/tom-1.mp3");
//    musaSound.play(); // play is a menthod
// Adding event listener Ends

// Adding Sound starts


// Adding Sound Ends



// challenge




// function handleClick(){ // function called handleClick
//     alert("I got clicked!");
// }


// function SeconButton(){
//    
// }
//my practice
// document.querySelector(".a").addEventListener("click", SeconButton);
// document.querySelector(".s").addEventListener("click", myWife);
// function myWife(){
//     alert("I love you Ikram");
// }