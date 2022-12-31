// //jshint esversion:6
// // dealing with file system
// const fs = require("fs"); // to allow nodejs to use the file system

// fs.copyFileSync("file1.txt", "file2.txt");

var superheroes = require("superheroes");
const supervillains = require("supervillains");


var mySuperheroName = superheroes.random();
supervillains.random();
console.log(mySuperheroName);
console.log(supervillains);
// supervillains.all;



