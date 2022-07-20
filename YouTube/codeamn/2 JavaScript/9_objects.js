const myObject = {
    keyname: {
        "keyname 2.1": "hello world"
    },
    keyname2: "value2"
    /* we don't require double or single quotes for key 
    until and unless it has some non-standard name */
}
console.log(myObject)
console.log(myObject['keyname'])
console.log(myObject['keyname']['keyname 2.1'])
// we can also use '.' notation if key name is standard
console.log(myObject.keyname['keyname 2.1'])