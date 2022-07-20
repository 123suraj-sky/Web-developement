let myFriends = ["default"];

function addMyFriends(friend) {
    // myFriends.push(friend);
    myFriends.unshift(friend);
    // notes:
    // push adds value to the ends of the array
    //* to add values at start of array we use "unshift"
    console.log(myFriends);
}

addMyFriends("sky");
addMyFriends("batman");
addMyFriends("joker");
console.log(myFriends[0]);
console.log(myFriends[1]);
console.log(myFriends[2]);

//* to get the length of the array
console.log(myFriends.length);

//* to remove a element from array
const lastVal = myFriends.pop();
console.log(myFriends, "Popped val is", lastVal);
//notes: when array is empty on popping it returns undefined

myFriends[1] = "modified";
console.log(myFriends);