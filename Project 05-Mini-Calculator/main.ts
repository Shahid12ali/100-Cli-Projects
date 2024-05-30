#! /usr/bin/env node
import inquirer from "inquirer";

console.log("Welcome To Mini Calculator");

let myLoop : boolean = true;
while (myLoop) {

    let userInput = await inquirer.prompt(
        [
            {
                name : "num1",
                type : "number",
                message : "Enter Your First Number!",

            },
            {
                name : "num2",
                type : "number",
                message : "Enter Your Second Number"
            },
            {
                name : "operator",
                type : "list",
                message : "Select The Operator",
                choices : ["Addition", "Subtraction", "Multiplication", "Division"],
            }
        ]
    );

    let {num1, num2, operator} = userInput;
    if (operator === "Addition") add();
    if (operator === "Subtraction") sub();
    if (operator === "Multiplication") multiply();
    if (operator === "Division") division();

    function add () {
        console.log(`${num1} + ${num2} = ${num1 + num2}`);
    }
    function sub () {
        console.log(`${num1} - ${num2} = ${num1 - num2}`);
    }
    function multiply () {
        console.log(`${num1} x ${num2} = ${num1 * num2}`);
    }
    function division () {
        console.log(`${num1} / ${num2} = ${num1 / num2}`);
    };

    let CalculateAgain = await inquirer.prompt(
        [
            {
                name : "more",
                type : "confirm",
                message : "Do You Want To More Calculation",
                default : false,
            }
        ]
    );
    if(!CalculateAgain.more) {
        myLoop = false;
        console.log("\nThank You For Using Mini Calculator!");
    };

};