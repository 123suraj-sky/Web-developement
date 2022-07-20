const myAge = 22;
function printMyAge() {
    const myAge = 25;
    // here previous myAge variable is shadowed by this new myAge variable
    // initialization is also not required for shadowing
    console.log(myAge);
}
printMyAge();