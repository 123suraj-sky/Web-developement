// notes
// "let" and "const" is a block scoped  variables
// "var" is used before ES6 (ECMAScript) in old JS
/* nowadays "let" and "const" is used and var is not used 
because it is globally scoped varible */

//* var
var a = "batman";
var a = 44; // var can be redeclared
{
    var a = "newBatman";
    console.log(a);
}
console.log(a);

//* let
let b = "joker";
// let b = 1; // let cannot be redeclared
{
    let b = "newJoker";
    console.log(b);
}
console.log(b);

//* const -> it cannot be changed
const c = "sky";
console.log(c);