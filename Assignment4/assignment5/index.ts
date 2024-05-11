//question 1
console.log("Hello, World!");
//Question 2
let temperature: number = 15;
if (temperature < 20) {
  console.log("It's cold!");
}
//Question 3
let apples: number = 10;
let givenAway: number = 3;
let applesLeft: number = apples - givenAway;
console.log("Apples left:", applesLeft);
//Question 4
let firstName: string = "Fazan";
let lastName: string = "Arshad";
let fullName: string = firstName + " " + lastName;
console.log("Full Name:", fullName);
//Question 5
let number5: number = 5;
let number3: number = 3;
if (number5 > number3) {
  console.log("Yes");
} else {
  console.log("No");
}
//Question 6
function calculateArea(radius: number): number {
  const pi: number = 5.29;
  return pi * radius * radius;
}
console.log("Area of circle with radius 10:", calculateArea(10));
//Question 7
for (let i: number = 1; i <= 50; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
//Question 8
let temperatures: number[] = [22, 27, 20, 14, 29];
let highestTemperature: number = Math.max(...temperatures);
console.log("Highest Temperature:", highestTemperature);
//Question 9
let age: number = parseInt("34:");
if (age < 18) {
  console.log("You are a minor.");
} else {
  console.log("You are an adult.");
}
//Question 10
function countPositiveNumbers(numbers: number[]): number {
  let count: number = 0;
  for (let num of numbers) {
    if (num > 0) {
      count++;
    }
  }
  return count;
}
let numbers: number[] = [-2, 5, -10, 3, 0, 8];
console.log("Count of positive numbers:", countPositiveNumbers(numbers));
// Question 11
function wordsStartingWithA(words: string[]): string[] {
  return words.filter((word) => word.toLowerCase().startsWith("a"));
}
console.log(wordsStartingWithA(["Apple", "Banana", "Apricot", "Orange"]));
// Question 12
let fruits: string[] = ["Apple", "Banana", "Orange", "Mango"];
console.log("Second to last element:", fruits[fruits.length - 2]);
// Question 13
function squareNumbers(numbers: number[]): number[] {
  return numbers.map((num) => num * num);
}
console.log(squareNumbers([1, 2, 3, 4, 5]));
// Question 14
function reverseArray(arr: any[]): any[] {
  let reversedArray: any[] = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversedArray.push(arr[i]);
  }
  return reversedArray;
}
console.log(reverseArray(["apple", "banana", "orange"]));
// Question 15
function logExceededAndBelow(scores: number[]): void {
  const maxScore: number = Math.max(...scores);
  const minScore: number = Math.min(...scores);
  let exceededCount: number = 0;
  let belowCount: number = 0;
  for (let score of scores) {
    if (score > maxScore) {
      exceededCount++;
    } else if (score < minScore) {
      belowCount++;
    }
  }
  console.log("Number of times exceeded max score:", exceededCount);
  console.log("Number of times fell below min score:", belowCount);
}
logExceededAndBelow([10, 5, 20, 20, 4, 5, 2, 25, 1]);
// Question 16
function removeFalseyValues(arr: any[]): any[] {
  return arr.filter(Boolean);
}
console.log(removeFalseyValues([0, false, "", null, undefined, NaN, 1, 2]));
// Question 17
let arr1: number[] = [1, 2, 3];
let arr2: number[] = [4, 5, 6];
let concatenatedArray: number[] = arr1.concat(arr2);
console.log(concatenatedArray);
// Question 18
function sumOfElements(arr: number[], isEven: boolean): number {
  return arr.reduce((sum, num) => {
    if (isEven && num % 2 === 0) {
      return sum + num;
    } else if (!isEven && num % 2 !== 0) {
      return sum + num;
    }
    return sum;
  }, 0);
}
console.log("Sum of even elements:", sumOfElements([1, 2, 3, 4, 5], true));
console.log("Sum of odd elements:", sumOfElements([1, 2, 3, 4, 5], false));
// Question 19
function findElementIndex(arr: any[], element: any): number {
  return arr.indexOf(element);
}
console.log(findElementIndex([1, 2, 3, 4, 5], 3));
console.log(findElementIndex([1, 2, 3, 4, 5], 6));
// Question 20
function findSmallestNumber(arr: number[]): number {
  return Math.min(...arr);
}
console.log(findSmallestNumber([5, 3, 9, 1, 7]));
// Question 21
function calculateProduct(numbers: number[]): number {
  return numbers.reduce((product, num) => product * num, 1);
}
console.log(calculateProduct([1, 2, 3, 4]));

// Question 22
function filterByLength(strings: string[], n: number): string[] {
  return strings.filter((str) => str.length > n);
}
console.log(filterByLength(["apple", "banana", "orange", "kiwi"], 5));

// Question 23
function findDuplicates(arr: any[]): void {
  let duplicates: any[] = [];
  arr.forEach((element, index) => {
    if (
      arr.indexOf(element, index + 1) !== -1 &&
      duplicates.indexOf(element) === -1
    ) {
      duplicates.push(element);
    }
  });
  console.log("Duplicates:", duplicates);
}
findDuplicates([1, 2, 3, 2, 4, 5, 4, 6]);

// Question 24
function incrementAll(arr: number[]): void {
  for (let i = 0; i < arr.length; i++) {
    arr[i]++;
  }
}
let numbersArray: number[] = [1, 2, 3, 4];
incrementAll(numbersArray);
console.log("Incremented Array:", numbersArray);

// Question 25
function countOccurrences(arr: any[], element: any): number {
  return arr.reduce((count, current) => {
    return current === element ? count + 1 : count;
  }, 0);
}
console.log(countOccurrences([1, 2, 3, 2, 4, 2], 2));

// Question 26
function isSorted(arr: number[]): boolean {
  return arr.every(
    (value, index, array) => index === 0 || value >= array[index - 1]
  );
}
console.log(isSorted([1, 2, 3, 4]));
console.log(isSorted([1, 3, 2, 4]));

// Question 27
function formatNames(names: string[]): string {
  if (names.length <= 2) {
    return names.join(" and ");
  } else {
    const lastTwoNames = names.slice(-2).join(" and ");
    const otherNames = names.slice(0, -2).join(", ");
    return `${otherNames}, ${lastTwoNames}`;
  }
}
console.log(formatNames(["Fazan", "Ahmed", "Ali", "Haris", "Hamza"]));

// Question 28
function convertToFahrenheit(celsiusTemperatures: number[]): number[] {
  return celsiusTemperatures.map((celsius) => (celsius * 9) / 5 + 32);
}
console.log(convertToFahrenheit([0, 10, 20, 30]));

// Question 29
function minMaxAverage(numbers: number[]): {
  min: number;
  max: number;
  average: number;
} {
  const min = Math.min(...numbers);
  const max = Math.max(...numbers);
  const sum = numbers.reduce((total, num) => total + num, 0);
  const average = sum / numbers.length;
  return { min, max, average };
}
console.log(minMaxAverage([1, 2, 3, 4, 5]));

// Question 30
function swapElements(arr: any[], index1: number, index2: number): void {
  if (
    index1 >= 0 &&
    index1 < arr.length &&
    index2 >= 0 &&
    index2 < arr.length
  ) {
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
  } else {
    console.log("Invalid indices provided.");
  }
}
let arrayToSwap: number[] = [1, 2, 3, 4, 5];
swapElements(arrayToSwap, 1, 3);
console.log("Swapped Array:", arrayToSwap);
// Question 31
function countOccurrencesInString(str: string, char: string): number {
  let count: number = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      count++;
    }
  }
  return count;
}
console.log(countOccurrencesInString("hello", "l"));

// Question 32
interface ToDoItem {
  task: string;
  completed: boolean;
}
const toDoList: ToDoItem[] = [
  { task: "Complete assignment", completed: false },
  { task: "Read a book", completed: true },
  { task: "Go for a run", completed: false },
];
function logIncompleteTasks(list: ToDoItem[]): void {
  list.forEach((item) => {
    if (!item.completed) {
      console.log(item.task);
    }
  });
}
logIncompleteTasks(toDoList);

// Question 33
function sortArray(arr: number[]): number[] {
  return arr.sort((a, b) => a - b);
}
console.log(sortArray([3, 1, 4, 2]));

// Question 34
function logArrayInReverse(arr: any[]): void {
  for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
  }
}
logArrayInReverse(["apple", "banana", "orange"]);

// Question 35
function calculator(operand1:number,operand2:number,arOper:string):any{switch(arOper)
  {case '+': return operand1 + operand2;
case '-': return operand1 - operand2;
case '*': return operand1 * operand2;
case '/': 
    if(operand2 !== 0)
  {return operand1 / operand2;}
else{ return "Error: can't divide by Zero!"}
default: return "Error: Aritmetic operator not recognized!"}
}
const operand1 = 19;
const operand2 = 37;
const operator = '*';
const calculated = calculator(operand1,operand2,operator);
console.log(calculated);

