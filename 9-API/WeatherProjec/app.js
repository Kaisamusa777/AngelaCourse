const express = require("express");
const https = require("https"); // native node 
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({extended: true})); //helps us to pass through the post request


app.get("/", function(req, res){

        res.sendFile(__dirname + "/index.html");//get our html file
    
});

// using app.post to catch the post method

app.post("/", function(req, res){

    const query = req.body.cityName; 
    const apiKey = "8b3fb16308e3cc2ba8ed088556cd3881"; // was taken from the url, right after appid= sign
    const unit = "metric";
    const url = "https://api.openweathermap.org/data/2.5/weather?q="+ query +"&appid=" + apiKey + "&units=" + unit ;

    https.get(url, function(response){
        console.log(response.statusCode);

        response.on("data", function(data){
            
          const weatherData = JSON.parse(data)//takes data into javascript object
          const temp = weatherData.main.temp // find information in main, and is temp
          const weatherDescription = weatherData.weather[0].description
          const icon = weatherData.weather[0].icon 
          const imageURL =  "http://openweathermap.org/img/wn/" + icon +"@2x.png "// icon id was removed, and added icon
          res.write("<p>The weather is currently" + weatherDescription + " </p>")
          res.write ("<h1>The Temperature in " + query + " is " + temp + " degrees Celcius. </h1>") //putting the data on the website
          res.write("<img src=" + imageURL + ">");
          res.send();
         
       
        

        //   stringify put data in one line 
        });

    });
    // res.send("Server is up and running");

    // console.log(req.body.cityName);
    // console.log("Post request received. ");
})

// url was gotten from postman, using our api key from openweathermap



app.listen(3000, function(){
    console.log("Kamara API is listening to port 3000");
});
























