// BigInt literals are numbers with the …n suffix.
// Only use a BigInt value when values greater than 2^53 are reasonably expected. 
// Don't coerce between BigInt values and Number values.


let big = 1234567890000000000000n;
let big2 = 1n;

console.log(big);
console.log(typeof big)
console.log(big2);
console.log(typeof big2);

console.log( 7n / 4n);

let big4 = 100n / 0n; // Uncaught RangeError RangeError: Division by zero
console.log(big4);
console.log(typeof big4);

