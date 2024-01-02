const fs = require("fs");
fs.writeFileSync("node.txt","this file is created by node js.");

fs.appendFileSync("node.txt", "this is append file.")
