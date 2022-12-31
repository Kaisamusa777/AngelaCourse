// install express
// require express

const express = require ("express");

const app = express(); //represents the function module

// home route
app.get("/", function(req, res){//allows us to get information / specifies root

    // console.log(request);
    // req = request, res = response
    res.send("<h1>Hello World</>");
});

// contact route
app.get("/contact", function(req, res){//contact page
    res.send("Contact me at: kmusamkamara2001@gmail.com");
});

// service route
app.get("/services", function(req,res){
    res.send("Our services are: \n Website building, \n Cyber Awareness");
});

// about route 
app.get("/about", function(req,res){
    res.send("Kaisamusa, is my name. I am the director of Tech-Kaisa, a company that focuses on web development and cyber Awareness");
});
app.get("/hobbies", function(req,res){
    res.send("My hobbies:Quran, Soccer, Movies")
})
//listens to any http request that gets sent to our server
app.listen(3000, function(){ // function in here is called a callback function
    console.log("Kamara Server started on port 3000");

}); 


// mine tryer

// const express = require("express");

// const app1 = express();

// app1.get("/", function(request, response){

//     response.send("Hello Kamara");
// });