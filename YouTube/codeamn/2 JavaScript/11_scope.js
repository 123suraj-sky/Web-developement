function x() {
    const hello = "world";
    if (true) {
        console.log(hello)
    }
    console.log(hello)

    let i = 0;
    for (; i < 10; i++) {
        console.log(i ** 2)
    }
}
// console.log(hello) --> it is out of scope
x()