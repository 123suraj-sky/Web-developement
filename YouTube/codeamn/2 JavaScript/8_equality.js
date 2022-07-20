const result = 1 === '1';
const result1 = 1 == "1";
// "==" it is less strict
// "===" is more strict, it will not typecast the variable
console.log(result);
console.log(result1);