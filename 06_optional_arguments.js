function square(x) {
    return x*x;
};
console.log(square(25, true, "dslkuhsfd"));

function minus(a, b) {
    if (b === undefined) return -a;
    else return a - b;
}
console.log(minus(10));
console.log(minus(10, 5));

function power(base, exponent = 2) {
    let result = 1;
    for(let i = 0; i < exponent; i++) {
        result *= base;
    }
    return result;
}
console.log(power(4)); // default exponent is 2 which declared in the function parameter.
console.log(power(4, 4));

console.log("c", "O", 2, "H", 2, "o"); // You can write infinite argument in log() function.