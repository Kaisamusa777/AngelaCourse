// first require express
const express = require("express");
const bodyParser = require("body-parser"); //to accept data in ther server



const app = express();
app.use(bodyParser.urlencoded({extended: true}));
// bodyParser.text, .json

app.get("/", function(req,res){
    // res.sendFile("index.html"); //it will look for the html file in the directory
    res.sendFile(__dirname + "/bmiCalculator.html");//looks for the file, no matter where it is

});

// post request that handles any post coming
app.post("/", function (req, res){

    var weight = +(req.body.weight);//plus makes it number
    var height = +(req.body.height);

    var result = (weight/Math.pow(height,2))
    res.send("The result is " + result);
});

app.get("/bmiCalculator", function(req,res){
    res.sendFile(__dirname + "bmiCalculator");
});
app.listen(3000, function(){

    console.log("Kamara Calculator web application listens on port 3000.");

});
