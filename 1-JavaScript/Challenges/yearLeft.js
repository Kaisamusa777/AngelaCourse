// calculates the year, month, and weeks left to live assuming we all have 90 years to live

function lifeInWeeks(age) {
    /************Don't change the code above************/    
        
        //Write your code here.
        
        // for (var i= 0; i <= 90; i++ ){

        //     console.log("days left is " )
        // }
     
        
        var daysLeft = (90-age)*365;
        var weeksLeft = (90-age)*52;
        var monthsLeft = (90-age)*12;
        return "if my age is " + age + ", that means I have \n" + daysLeft + " days, " + weeksLeft + " weeks, and " + monthsLeft + " months left, \n if I were to reach 90 years of Age Inshallah.";
    
    
        
        
        
    /*************Don't change the code below**********/
    }
    lifeInWeeks(23);
    
    