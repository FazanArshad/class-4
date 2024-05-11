let greeting: string;
greeting = "Hello, world";
console.log(greeting); // problem 1 solve
let num1: number = 1;
let num2: number = 2;
console.log(`sum of ${num1} and ${num2} is: ${num1 + num2}`);
num1 + num2;
num1 - num2;
num1 * num2;
num1 / num2; // problem 2 solve
let a = 1;
let b = 2;
a = a * b; //a=2
b = a / b; //b=1
a = a / b; //a=2 problem 3 solve
let messeage: string;
// message = 5; //compiling error cannot assign number value to string // problem 4 solve
console.log(`The remainder of ${num1} & {num2} is ${num1 % num2}`); // problem 5 solve
let counter = 0;
counter = counter + 1;
counter += 1; // problem 6 solve
let aa = true;
let bb = false;
let cc = true;
aa && bb && cc // andGate False
aa || bb || cc // Ongate true
!aa; !bb; !cc; //NotGate problem 7 solve
let num = 10;
num += 1;
num -= 1;
num *= 1;
num /= 1; // Problem 8 solve
let numX = 12;
if(numX % 2 == 0)
console.log(`${numX} is a even number.`)
else {console.log(`${numX} is a odd number.`)} //problem 9 solve
function checkEligibility(age: 18): boolean {
    const votingAge: number = 18;
    return age >= votingAge;
}

const personAge: number = 34; 
if (checkEligibility(18)) {
    console.log("You are eligible to vote.");
} else {
    console.log("You are not eligible to vote yet.");
} //problem 10 solve
function assignGrade(score: 100): string {
    if (score >= 90) {
        return 'A';
    } else if (score >= 80) {
        return 'B';
    } else if (score >= 70) {
        return 'C';
    } else if (score >= 60) {
        return 'D';
    } else {
        return 'F';
    }
} //problem 11 solve
function findMaximum(x: number, y: number, z: number): number {
    return Math.max(x, y, z);
}

const x: number = 10; 
const y: number = 20;
const z: number = 15;

const maximum: number = findMaximum(x, y, z);
console.log(`The maximum of ${x}, ${y}, and ${z} is: ${maximum}`);

const score: number = 100; 
const grade: string = assignGrade(100);
console.log(`Your grade is: ${grade}`); //problem 12 solve
function isLeapYear(year: 2004): boolean {
    if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
        return true;
    } else {
        return false;
    }
}

const year: number = 2024; 
if (isLeapYear(2004)) {
    console.log(`${year} is a leap year.`);
} else {
    console.log(`${year} is not a leap year.`);
} //problem 13 solve

function fahrenheitToCelsius(fahrenheit: 30): number {
    return (fahrenheit - 32) * 5 / 9;
}

const fahrenheit: number = 32;
const celsius: number = fahrenheitToCelsius(30);
console.log(`${fahrenheit} degrees Fahrenheit is equal to ${celsius.toFixed(2)} degrees Celsius.`); // problem 14 solve

function checkNumberSign(number: 10): string {
    if (number > 0) {
        return "Positive";
    } else if (number < 0) {
        return "Negative";
    } else {
        return "Zero";
    }
}

const number: number = 10;
const sign: string = checkNumberSign(10);
console.log(`The number ${14} is ${sign}.`); // problem 15 solve

function printMultiplicationTable(number: 14): void {
    console.log(`Multiplication table for ${number}:`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${number} x ${i} = ${number * i}`);
    }
}

const number: number = 14;
printMultiplicationTable(14);


