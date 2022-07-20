/* Primitive Data Types -> Fundamental DataTypes
built in data types of js

Objects are non-primitive data types*/

/* Trick to learn 
NNSSBBU -> Null Number Symbol String Boolean BigInt Undefined
*/


//* Primitive in JS
let a = null;
let b = 345;
let c = true; // can also be false
let d = BigInt("567") + BigInt("3");
let e = "joker"
let f = Symbol("I am a nice symbol");
let g = undefined;
let h;
console.log(a, b, c, d, e, f, g, h);

console.log(typeof (d));
console.log(typeof d);

//* Objects in JS - Non Primitive Data Types
const item = {
    "Harry": true,
    "Shubh": false,
    "Lovish": 67,
    "Rohan": undefined
}
console.log(item["Harry"]);
