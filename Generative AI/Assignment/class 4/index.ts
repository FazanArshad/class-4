let greeting: string;
greeting = "Hello, world";
console.log(greeting); // Problem 1 solved

let num1: number = 1;
let num2: number = 2;
console.log(`sum of ${num1} and ${num2} is: ${num1 + num2}`); // Problem 2 solved

let a = 1;
let b = 2;
a = a * b; // a=2
b = a / b; // b=1
a = a / b; // a=2 Problem 3 solved

let message: string;
// message = 5; // compiling error cannot assign number value to string // Problem 4 solved

console.log(`The remainder of ${num1} & ${num2} is ${num1 % num2}`); // Problem 5 solved

let counter = 0;
counter = counter + 1;
counter += 1; // Problem 6 solved

let aa = true;
let bb = false;
let cc = true;
aa && bb && cc; // andGate False
aa || bb || cc; // Ongate true
!aa;
!bb;
!cc; // NotGate Problem 7 solved

let num = 10;
num += 1;
num -= 1;
num *= 1;
num /= 1; // Problem 8 solved

let numX = 12;
if (numX % 2 == 0) console.log(`${numX} is an even number.`);
else {
  console.log(`${numX} is an odd number.`);
} // Problem 9 solved

function checkEligibility(age: number): boolean {
  const votingAge: number = 18;
  return age >= votingAge;
}

const personAge: number = 34;
if (checkEligibility(personAge)) {
  console.log("You are eligible to vote.");
} else {
  console.log("You are not eligible to vote yet.");
} // Problem 10 solved

function assignGrade(score: number): string {
  if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
} // Problem 11 solved

function findMaximum(x: number, y: number, z: number): number {
  return Math.max(x, y, z);
}

const x: number = 10;
const y: number = 20;
const z: number = 15;

const maximum: number = findMaximum(x, y, z);
console.log(`The maximum of ${x}, ${y}, and ${z} is: ${maximum}`); // Problem 12 solved

function isLeapYear(year: number): boolean {
  if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
    return true;
  } else {
    return false;
  }
}

const year: number = 2024;
if (isLeapYear(year)) {
  console.log(`${year} is a leap year.`);
} else {
  console.log(`${year} is not a leap year.`);
} // Problem 13 solved

function fahrenheitToCelsius(fahrenheit: number): number {
  return (fahrenheit - 32) * 5 / 9;
}

const fahrenheit: number = 32;
const celsius: number = fahrenheitToCelsius(30);
console.log(`${fahrenheit} degrees Fahrenheit is equal to ${celsius.toFixed(2)} degrees Celsius.`); // Problem 14 solved

function checkNumberSign(number: number): string {
  if (number > 0) {
    return "Positive";
  } else if (number < 0) {
    return "Negative";
  } else {
    return "Zero";
  }
}

const number: number = 14;
const sign: string = checkNumberSign(14);
console.log(`The number ${number} is ${sign}.`); // Problem 15 solved

function printMultiplicationTable(number: number): void {
  console.log(`Multiplication table for ${number}:`);
  for (let i = 1; i <= 10; i++) {
    console.log(`${number} x ${i} = ${number * i}`);
  }
}

printMultiplicationTable(14); // problem 16 solve