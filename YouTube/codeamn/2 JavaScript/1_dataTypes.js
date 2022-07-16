console.log("Hello World");

const myFirstVariable = 5;
console.log(myFirstVariable);
// notes:
// since const values cannot be changed later. So 
// we have to declare its value here

// not use var it is deprecated
// var x = 5;
// console.log(x);

let a = 5;
console.log(a);
a = 6;
console.log(a);

let myName = "sky";
console.log(myName);

let boolean = true;
console.log(boolean);
boolean = false;
console.log(boolean);

//* Array
const friends = [22, true, "batman"];
console.log(friends);

//* null and undefined
const someSpecialValue1 = undefined;
console.log(someSpecialValue1);
// notes: undefined is value of variable which is not initialized
const someSpecialValue2 = null;
console.log(someSpecialValue2);
// notes: null means the value should not exist


let bigIntNumber = 1111111111111111111111111111111111;
console.log(bigIntNumber);
// arithmetic won't work with that big number
// to make it work we write n after the number ends
bigIntNumber = 1111111111111111111111111111111111n;
console.log(bigIntNumber);
console.log(typeof(bigIntNumber));
