console.log("This is mod.js");

function average(arr) {
    let sum = 0;
    arr.forEach(element => {
        sum += element;
    });
    return sum / arr.length;
}

//* exporting a function
// module.exports = average;

//* exporting more than 1 function or classes ...
// for that we can make objects
module.exports = {
    avg: average,
    name: "Harry",
    repo: "GitHub"
}
// since it is a object, so we can separately mention that also
module.exports.newname = "SkY";
// here "newname" is key and "SkY" is its value
