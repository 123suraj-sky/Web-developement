console.log("This is tutorial 53");

// Void function - does not return anything
function greet(name, greetText = "Greetings from JavaScipt") {
/*  This string in greetText printed if no value if     
    passed to greetText variable. 
    It will be default value for greetText */

    console.log(greetText + " " + name);
    console.log(name + " is a good boy");
    let name1 = "Name"; // local scope
}

// It will return a value
function sum(a, b, c) {
    let d = a + b + c;
    return d;
}

let name = "Harry";
let name1 = "Shubham";
let name2 = "Rohan";
let name3 = "Sagar";
let greetText = "Good Morning";

// console.log(name + " is a good boy");
//? Why it is showing name is depreceted on above line
// console.log(name1 + " is a good boy");
// console.log(name2 + " is a good boy");
// console.log(name3 + " is a good boy");

greet(name, greetText);
greet(name1, greetText);
greet(name2, greetText);
let returnVal = greet(name3);
console.log(returnVal);
let returnVal1 = sum(1, 2, 3);
console.log(returnVal1);

