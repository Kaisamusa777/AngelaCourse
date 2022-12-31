
// set the array
// var family = ["Mother", "Father", "Siblings", "Wife", "Children", "Friends"]

// var numberOfFamily = family.length // store the length of the array
// var randomFamilyPosition = Math.floor(Math.random() * numberOfFamily); // store the randonization
// var randomPersonInFamily = family[randomFamilyPosition]; // store the person to be chosen

// console.log(randomPersonInFamily);


// console.log(randomPersonInFamily);

function favoritePerson(){
    var family = ["Mother", "Father", "Siblings", "Wife", "Children", "Friends"]

    var numberOfFamily = family.length // store the length of the array
    var randomFamilyPosition = Math.floor(Math.random() * numberOfFamily); // store the randonization
    var randomPersonInFamily = family[randomFamilyPosition]; // store the person to be chosen
    
    // console.log(randomPersonInFamily);
    return randomPersonInFamily + ", is my favorite in the family";

}

console.log(favoritePerson());

