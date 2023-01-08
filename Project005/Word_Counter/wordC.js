#! /usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
import chalkAnimation from "chalk-animation";
const sleep = () => new Promise((resolve) => setTimeout(resolve, 2000));
const welcome = async () => {
    let rainbowT = chalkAnimation.rainbow(`
    --------------WORD COUNTER----------------
    `);
    await sleep();
    rainbowT.stop();
};
async function wordcount() {
    let wordc = await inquirer.prompt({
        name: "wc",
        type: "input",
        message: chalk.bgGreen("Please Write or Paste the Paraghraph:"),
        validate: (input) => {
            if (!input) {
                return 'Please write or Paste Something';
            }
            else {
                return true;
            }
        }
    });
    let para = wordc.wc;
    let wordSplit = para.trim().split(" ");
    let wordJoined = wordSplit.join("");
    let totalcharc = wordJoined.length;
    let empty = [""];
    let words = wordSplit.filter(item => !empty.includes(item));
    let totalwords = words.length;
    console.log(chalk.green(`Total characters: ${totalcharc}`));
    console.log(chalk.green(`Total Words: ${totalwords}`));
}
async function repeat() {
    do {
        let final = await wordcount();
        let repeatAgain = await inquirer.prompt({
            name: "rAgain",
            type: "list",
            message: "Do you want to Continue?",
            choices: [
                "Yes,I Do",
                "No,Exit Please"
            ]
        });
        if (repeatAgain.rAgain === "Yes,I Do") {
        }
        else {
            console.log(chalk.bgBlue("Thank you for using this App"));
            return false;
        }
    } while (true);
}
console.clear;
await welcome();
await repeat();
