#! /user/bin/env node
import inquirer from "inquirer";
const questions = await inquirer.prompt([{
        type: "input",
        name: "num1",
        message: "enter first number",
    },
    {
        type: "input",
        name: "num2",
        message: "enter second number",
    },
    {
        type: "list",
        name: "operator",
        message: "enter operator",
        choices: ['+', '-', '*', '/']
    },]);
function sum(num1, num2) {
    return Number(num1) + Number(num2);
}
function difference(num1, num2) {
    return Number(num1) - Number(num2);
}
function product(num1, num2) {
    return num1 * num2;
}
function division(num1, num2) {
    return num1 / num2;
}
if (questions.operator == "+") {
    console.log("sum of two given numbers;", sum(questions.num1, questions.num2));
}
else if (questions.operator == "-") {
    console.log("difference of two given numbers:", difference(questions.num1, questions.num2));
}
else if (questions.operator == "*") {
    console.log("product of two given numbers:", product(questions.num1, questions.num2));
}
else if (questions.operator == "/") {
    console.log("division of two given numbers:", division(questions.num1, questions.num2));
}
else {
    console.log("inavlid operator");
}
