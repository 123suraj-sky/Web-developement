// notes:
// Enter "clear" to clear the console
// Synchronous or blocking
// ->line by line execution

// Asynchronous or non-blocking
// ->line by line execution not guaranteed
// ->callbacks will fire

const fs = require("fs");
fs.readFile("64_read.txt", "utf-8", (a, b) => {
    // console.log(a, b);
    console.log(b); // if we don't want to see the error
});
//It also require a third function i.e. callback function.
// Here 'a' is error and 'b' is data.
// Error occurs when there is any error with file.
// For Eg. wrong filename is given
console.log("This is a message");

/* Here we see last print statement prints first b/c here we used readFile which is asynchronous.

B/c file form 64_read.txt prints when the reading process of readFile completed */

// notes: Nodejs works on non-blocking IO model
// It is advised not to use blocking and non-blocking at same time