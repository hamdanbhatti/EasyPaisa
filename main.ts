#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

interface User {
   name: string;
   balance: number;
}
console.log(
   chalk.bold.greenBright(
      `Welcome to EasyPaisa Program,\n   ${chalk.cyan("===== >>")} ${chalk.italic.redBright("Hi")} 👋`
   )
);

let user: User = { name: "Hi", balance: 25000 };

async function mainMenu() {

   
   await inquirer
      .prompt([
         {
            type: "list",
            name: "option",
            message: "Select an option:",
            choices: [
               "Check Balance",
               "Transfer Money",
               "Receive Money",
               "Bill Payments",
               "Easy Load Bundles",
               "Cash Back",
               "Savings",
               "Exit",
            ],
         },
      ])
      .then((answers) => {
         switch (answers.option) {
            case "Check Balance":
               checkBalance();
               break;
            case "Transfer Money":
               transferMoney();
               break;
            case "Receive Money":
               receiveMoney();
               break;
            case "Bill Payments":
               billPayments();
               break;
            case "Easy Load Bundles":
               easyLoadBundles();
               break;
            case "Cash Back":
               cashBack();
               break;
            case "Savings":
               savings();
               break;
            case "Exit":
               console.log(chalk.italic.bold.greenBright("Exiting...\n"));
               console.log(
                  chalk.italic.bold.underline(
                     "Thanks for Using my EasyPaisa Program.....\n"
                  )
               );
               console.log(
                  chalk.italic.bold.greenBright(
                     `This Program Created By ${"Muhammad Hamdan Bhatti"}\n`
                  )
               );

               process.exit();
         }
      });
}
async function checkBalance() {
   console.log(
      chalk.bold.italic.greenBright(
         `Balance : ${chalk.red(`Rs ${user.balance}💰`)}`
      )
   );
   mainMenu();
}

async function transferMoney() {
   const { amount, recipient } = await inquirer.prompt([
      {
         type: "number",
         name: "amount",
         message: "Enter the amount to transfer:",
      },
      {
         type: "input",
         name: "recipient",
         message: "Enter the recipient name:",
      },
   ]);

   if (user.balance >= amount) {
      user.balance -= amount;
      console.log(
         chalk.bold.italic.greenBright(
            `Transferred ${chalk.redBright(
               `Rs ${amount}💰`
            )} to "${chalk.yellowBright(recipient)}"`
         )
      );
   } else {
      console.log(chalk.red.italic("Insufficient balance"));
   }

   mainMenu();
}

async function receiveMoney() {
   const { amount, sender } = await inquirer.prompt([
      {
         type: "number",
         name: "amount",
         message: "Enter the amount received:",
      },
      {
         type: "input",
         name: "sender",
         message: "Enter the sender name:",
      },
   ]);

   user.balance += amount;
   console.log(
      chalk.bold.greenBright(
         `Received ${chalk.italic.redBright(
            `Rs${amount}💰`
         )} from ${chalk.yellowBright(sender)}`
      )
   );

   mainMenu();
}

async function billPayments() {
   const { amount, billName } = await inquirer.prompt([
      {
         type: "number",
         name: "amount",
         message: "Enter the bill amount:",
      },
      {
         type: "input",
         name: "billName",
         message: "Enter the bill name:",
      },
   ]);

   if (user.balance >= amount) {
      user.balance -= amount;
      console.log(
         chalk.bold.greenBright(
            `Paid ${chalk.italic.redBright(
               `Rs ${amount}💰`
            )} for ${chalk.yellowBright(billName)}`
         )
      );
   } else {
      console.log(chalk.italic.red("Insufficient balance"));
   }

   mainMenu();
}

async function easyLoadBundles() {
   const { amount, phoneNumber } = await inquirer.prompt([
      {
         type: "number",
         name: "amount",
         message: "Enter the bundle amount:",
      },
      {
         type: "input",
         name: "phoneNumber",
         message: "Enter the phone number:",
      },
   ]);

   if (user.balance >= amount) {
      user.balance -= amount;
      console.log(
         chalk.italic.bold.greenBright(
            `Loaded ${chalk.redBright(
               `Rs ${amount}💰`
            )} bundle to ${chalk.yellowBright(phoneNumber)}`
         )
      );
   } else {
      console.log(chalk.italic.red("Insufficient balance"));
   }

   mainMenu();
}

async function cashBack() {
   const { amount } = await inquirer.prompt([
      {
         type: "number",
         name: "amount",
         message: "Enter the cash back amount:",
      },
   ]);

   user.balance += amount;
   console.log(
      chalk.bold.italic.greenBright(
         `Received ${chalk.italic.redBright(`Rs ${amount}💰`)} cash back`
      )
   );

   mainMenu();
}

async function savings() {
   const { amount } = await inquirer.prompt([
      {
         type: "number",
         name: "amount",
         message: "Enter the amount to save:",
      },
   ]);

   if (user.balance >= amount) {
      user.balance -= amount;
      console.log(
         chalk.italic.bold.greenBright(
            `Saved ${chalk.redBright(`Rs ${amount}💰`)}`
         )
      );
   } else {
      console.log(chalk.italic.red("Insufficient balance"));
   }

   mainMenu();
}

mainMenu();

