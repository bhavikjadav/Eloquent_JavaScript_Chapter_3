/* 

Minimum

The previous chapter introduced the standard function Math.min() than
returns its smallest argument. We can build smoething like that now.
Write a function min that takes two arguments and returns their minimum.
*/

const findMinimum = (num1, num2) => {
    return Math.min(num1, num2);
};

console.log(findMinimum(20, 3));