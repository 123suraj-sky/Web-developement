//notes:
// break and continue only work with loops
// return work with function

let evenNumbers = [];
let oddNumbers = [];

// for (let i = 0; i < 20; i += 2) {
for (let i = 0; i < 20; i++) {
    if (i % 2 === 0) { // "===" gives remainder same as "=="
        evenNumbers.push(i);
    }
    else {
        oddNumbers.push(i);
    }
}

console.log(evenNumbers);
console.log(oddNumbers);

//* continue
function skipNumber(number) {
    let evenNum = [];
    for (let i = 0; i < 20; i++) {
        if (i % 2 === 1) {
            continue;
        }
        if (i == number) {
            continue;
        }
        evenNum.push(i);
    }
    return evenNum;
}
console.log("Even Nums with continue are", skipNumber(10));

//* break
function skipNumber2(number) {
    let oddNum = [];
    for (let i = 0; i < 20; i++) {
        if (i == number) {
            break;
        }
        if (i % 2 === 0) {
            continue;
        }
        oddNum.push(i);
    }
    return oddNum;
}
console.log("Odd Nums with break are", skipNumber2(11));