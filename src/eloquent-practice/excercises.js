function factorial(n) {
  if (n == 0) {
    return 1;
  } else {
    return factorial(n - 1) * n;
  }
}

console.log(factorial(4));

console.log(`half of 100 is ${100 / 2}`)

console.log(- (10 - 2));
console.log(Math.max(2,10));


let myYearNumber = 1980 *2;



console.log(Math.max(myYearNumber, 4) + 100);

let theNumber = Number(10);

console.log(typeof theNumber);

let number = 0;
while (number <= 12) {
console.log(number);
number = number + 2;
}
