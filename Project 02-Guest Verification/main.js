#! /usr/bin/env node
import inquirer from "inquirer";
let myLoop = true;
let guestList = ["subhan", "adnan", "dilbar", "shahid", "ramzan", "azam,", "ahmed", "sadam"];
while (myLoop === true) {
    let userInput = await inquirer.prompt([
        {
            name: "userName",
            type: "input",
            message: "Please Enter Your Name"
        }
    ]);
    let guestName = userInput.userName;
    let lowerGuestName = guestName.toLowerCase();
    if (guestList.includes(lowerGuestName)) {
        console.log(`Wellcome Mr. ${guestName}! Please, Make Your Self Comfortable`);
        myLoop = false;
    }
    else {
        console.log(`\nSorry Mr. ${guestName} You Are Not Invited\n`);
        let askAgain = await inquirer.prompt([
            {
                name: "OtherName",
                type: "confirm",
                message: "Do You Have Another Name You Go By? If So, We Can Check Again!",
                default: false,
            }
        ]);
        if (!askAgain.OtherName) {
            myLoop = false;
            console.log(`\nWe Apologize, But You Are Not On The Guest List`);
        }
    }
}
