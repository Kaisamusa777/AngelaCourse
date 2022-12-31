// firstly try to get your logic floor diagram
function isLeap(year){
    if (year % 4 === 0){ // first logic starts
        if (year % 100 === 0){
            if (year % 400 === 0){
                return "Leap year."
            } else{
                return "Not leap year."
            }

        } else{
            return "Leap year."
        }

    } else{
        return "Not Leap year."
    }
}

console.log(isLeap(1900));