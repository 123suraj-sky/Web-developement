let myAge = 21
let myUpdatedAge = myAge + 2;
let myUpdatedAge1 = myAge - 2;
let myUpdatedAge2 = myAge * 2;
let myUpdatedAge3 = myAge / 2;
let myUpdatedAge4 = myAge ** 2; //* "**" means exponent
myUpdatedAge4 += myAge;
console.log(myUpdatedAge4);
console.log("plus operator", myUpdatedAge);
console.log("plus operator " + myUpdatedAge);
console.log(myUpdatedAge1);
console.log(myUpdatedAge2);
console.log(myUpdatedAge3);
console.log(myUpdatedAge4);

//* increment and decrement
let newAge = 22;
newAge++; // post increment
console.log(newAge);
++newAge; // pre increment
console.log(newAge);
newAge--; // post decrement
console.log(newAge);
--newAge; // pre decrement
console.log(newAge);