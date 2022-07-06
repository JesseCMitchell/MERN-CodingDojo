Number.prototype.isPrime = function () {
    for (let i = 2; i < this; i++) {
        if (this % i === 0) {
            return false;
        }
    }
    return true;
};

const { performance } = require("perf_hooks");
const start = performance.now();
let primeCount = 0;
let num = 2; // for math reasons, 1 is considered prime
while (primeCount < 1e4) {
    if (num.isPrime()) {
        primeCount++;
    }
    num++;
}
console.log(`The 10,000th prime number is ${num - 1}`);
console.log(`This took ${performance.now() - start} milliseconds to run`);

// New version
Number.prototype.newIsPrime = function () {
    for (let i = 2; i <= Math.sqrt(this); i++) {
        if (this % i === 0) {
            return false;
        }
    }
    return true;
};

// const { performance } = require('perf_hooks');
const newStart = performance.now();
primeCount = 0;
num = 2; // for math reasons, 1 is considered prime
while (primeCount < 1e4) {
    if (num.newIsPrime()) {
        primeCount++;
    }
    num++;
}
console.log(`The 10,000th prime number is ${num - 1}`);
console.log(`This took ${performance.now() - newStart} milliseconds to run`);

const newStart2 = performance.now();
primeCount = 0;
num = 2; // for math reasons, 1 is considered prime
while (primeCount < 1e5) {
    if (num.newIsPrime()) {
        primeCount++;
    }
    num++;
}
console.log(`The 100,000th prime number is ${num - 1}`);
console.log(`This took ${performance.now() - newStart2} milliseconds to run`);
// Calculated to be 1299709 in 10126 milliseconds (~10 seconds)

const newStart3 = performance.now();
primeCount = 0;
num = 2; // for math reasons, 1 is considered prime
while (primeCount < 1e6) {
    if (num.newIsPrime()) {
        primeCount++;
    }
    num++;
}
console.log(`The 1,000,000th prime number is ${num - 1}`);
console.log(`This took ${performance.now() - newStart3} milliseconds to run`);
// Calculated to be 15,485,863 in 335629 milliseconds (~5.59 minutes)

//------------------------------------------------------------------------------
// recursive
function rFib(n) {
    if (n < 2) {
        return n;
    }
    return rFib(n - 1) + rFib(n - 2);
}
rFib(20);
// Above has O(n^2) complexity

// iterative
function iFib(n) {
    const vals = [0, 1];
    while (vals.length - 1 < n) {
        let len = vals.length;
        vals.push(vals[len - 1] + vals[len - 2]);
    }
    return vals[n];
}
iFib(20);
// Above has O(n) complexity

// Therefore, the iterative function can be completed in less time than the recursive method.

//------------------------------------------------------------------------------
const story =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident culpa nihil repellat nulla laboriosam maxime, quia aliquam ipsam reprehenderit delectus reiciendis molestias assumenda aut fugit tempore laudantium tempora aspernatur? Repellendus consequatur expedita doloribus soluta cupiditate quae fugit! Aliquid, repellat animi, illum molestias maiores, laboriosam vero impedit iusto mollitia optio labore asperiores!";
const reversed1 = story.split("").reverse().join("");
console.log(reversed1);

function reverseString(str) {
    let splitStr = str.split("");

    // Cuts the "reversing" of the split string by half the iteration.
    for (let i = 0; i < splitStr.length / 2; i++) {
        let temp = splitStr[i];
        splitStr[i] = splitStr[splitStr.length - 1 - i];
        splitStr[splitStr.length - 1 - i] = temp;
    }

    return splitStr.join("");
}

console.log(reverseString(story));
