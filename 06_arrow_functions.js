const power = (base, exponent) => {
    let result = 1;
    for (let i = 0; i < exponent; i++) {
        result *= base;
    }
    return result;
};

console.log(power(2, 10));

// Arrow function without parameters.
const myName = (fName, lName) => {
    console.log(fName + " " + lName);
};
myName("Bhavik", "Jadav");

function chicken() {
    return egg();
};

function egg() {
    return chicken();
};
console.log(chicken() + " came first.");