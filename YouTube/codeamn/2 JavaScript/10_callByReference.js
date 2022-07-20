const myProfile = {
    name: "SKY",
    age: 22
}

const secondProfile = {
    name: "Batman",
    age: 43
}

//notes: call by value
function primitiveMutate(primitive) {
    primitive++
    console.log(primitive)
}

//notes: objects works as "call by reference" in JS
// i.e. address is passed
function mutate(obj) {
    obj.age++
}

let num = 100
primitiveMutate(num)
console.log(num)

mutate(secondProfile);
console.log(secondProfile)