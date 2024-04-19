#! /usr/bin/env node
import inquirer from "inquirer";
// 1: Computer will generate random number//
// 2: User input for guessing number//
// 3: Compare user inpur and computer generated number and show result//
const randomNumber = Math.floor(Math.random() * 20 + 1);
const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number between 1-20:",
    }
]);
if (answers.userGuessedNumber === randomNumber) {
    console.log("Congratulations! You guessed the right number");
}
else {
    console.log("You guessed the wrong number");
}
