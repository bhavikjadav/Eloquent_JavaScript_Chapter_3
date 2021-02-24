// Global variable.
let x = 10;

// x variable is accessible in if statement because it's a global variable.
if(true) {
    let y = 20;
    let z = 30;
    console.log(x + y + z);
}

// Followig  (x + z) will throw an Error.
// console.log(x + z);

// Another Example.
const halve = function(n) {
    return n / 2;
};

let n = 10;
console.log(halve(n));
console.log(n);
