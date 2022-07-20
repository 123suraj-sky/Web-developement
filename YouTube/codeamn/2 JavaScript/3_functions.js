let myAge = 22;
const sum = 200;
let totalCount = 5;

function printAllVariables(){
    console.log("myAge", myAge);
    console.log("sum", sum);
    console.log("totalCount", totalCount);
}
printAllVariables();
myAge = 21;
printAllVariables();

function addsToMyAge(increment, multiply){
    myAge += increment;
    myAge *= multiply;
}
addsToMyAge(5, 5);
console.log(myAge);

// notes:
/*  if on calling a function we get "NaN", that means "Not
    a Number"
    
    if we don't return anything from function, by default it return "undefined"    
*/

function addsSum(a, b){
    return (sum + a * b);
}
const newSum = addsSum(1,2);
console.log(sum, newSum);
