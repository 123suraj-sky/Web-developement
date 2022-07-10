//* Built in modules
//notes: console.log automatically add a new line where 
//notes: the string end if given to it

const fs = require("fs");

//* reading a file
// first argument is filename and second is encoding
// const text = fs.readFileSync("64_read.txt", "utf-8");

let text = fs.readFileSync("64_read.txt", "utf-8");
// Here sync means synchronous.
// It means program will not further continue till this 
// line is executed.
text = text.replace("Backend", "newBackend");
console.log("The content of the file is:");
console.log(text);

//* writing a file
// first argument is filename and second is content
console.log("Creating a new file...");
fs.writeFileSync("64_write.txt", text);