// const fs = require("fs");
// fs.writeFileSync("node.txt","this file is created by node js.");

// fs.appendFileSync("node.txt", "this is append file.")

// const extend = require('./extend.js');

// console.log(extend);

// console.log(extend.data.sumNumber(9,10));

// console.log(extend.data.Circumference(10));

// console.log(extend.data.areaOfRectangle(9,10));

// let sumNumber = extend.data.sumNumber(9,10);
// let Circumference =extend.data.Circumference(10);
// let areaOfRectangle = extend.data.areaOfRectangle(9,10);

// console.log(extend);
// console.log(rectangle);

// const file = require('fs');

// file.appendFileSync("data.txt", sumNumber);
// file.appendFileSync("data.txt", Circumference);
// file.appendFileSync("data.txt", areaOfRectangle);

const validator = require("validator")

console.log("checking email........");
console.log(validator.isEmail("aa@mail.com"));
console.log(validator.isEmail("aa@gmail"));
console.log(validator.isURL("www.gmail.com"));

