function shouldIGetALicense(age) {
    if (age > 18) {
        return true;
    } else {
        // here else is not necessary b/c there is no other condition
        return false;
    }
}

console.log(shouldIGetALicense(91));
console.log(shouldIGetALicense(1));

function shouldIGetALicense2(age, bribe, whitelisted) {
    if (!whitelisted) {
        console.log("You are banned");
        return;
    }

    if ((age <= 18 && bribe > 100) || bribe > 500) {
        console.log("you pass");
    }
    else if (age > 18) {
        console.log("This person is above 18");
    }
    else if (bribe <= 100) {
        console.log("Too less");
    }
}
shouldIGetALicense2(10, 10);
shouldIGetALicense2(10, 10, true);