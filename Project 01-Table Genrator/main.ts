#! /usr/bin/env node

import inquirer from "inquirer";

let table : boolean = true;
while (table) {
    let userInput = await inquirer.prompt(
        [
            {
                name : "num",
                type : "number",
                message : "Enter Your Number To Genrate Table",
            }
        ]
    );
    let myNumber = userInput.num;
    if (myNumber) {
        console.log(`Here Is The Table Of ${myNumber}\n`);
        for(let i = 1; i <= 10; i++) {
        console.log(`${myNumber} x  ${i} = ${myNumber * i}`);
        }
    }else {
        console.log(`Enter A Numerical Form`);
    }

    let againPrint = await inquirer.prompt(
        [
            {
                name : "askUser",
                type : "confirm",
                message : "Do You Want To Print Another Table",
                default : false,
            }
        ]
    );
    if (againPrint.askUser === false) {
        table = false;
        console.log(`\nThankyou`);
    }
}