//* Importing a module
// we can explicitly mention which function, classes, etc. we want to use
// const mod = require('./mod.js');
// const mod = require('./mod');
// This is the path to the module but it not necessary to give the path

// const average = require('./mod');
// console.log(average([1, 2, 3, 4, 5]));
// console.log("This is index.js");

const mod = require('./mod');
console.log(mod.avg([1, 2, 3, 4, 5]));
console.log(mod.newname);
console.log("This is index.js");
