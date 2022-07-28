const { questionSetOne, questionSetTwo } = require("./question.js")
const readLineSync = require('readline-sync');
const chalk = require('chalk')
let price = 10;

const name = readLineSync.question(chalk.underline.bgRed("Enter Your Name to Start the Game\n\n"))
console.log("\nWelcome " + chalk.underline.bgGreen(name) + " to Kaun Banega Carorepati\n");
console.log(chalk.red("The Rules and Regulations of the game are as follows\n"))
console.log(chalk.blue(
  "\n1. For Each Right answer you get Rs.10k\n2. For Each Wrong answer Rs.5k would be deducted\n3. Your Initial Balance is Rs.10k\n4. Once you start the game there is no way of Quitting it\n\n\n"
))

const play = ((question, answer) => {
  const userAns = readLineSync.question(question + "\n\nYour ans is: ").toString();
  if (userAns.toLowerCase() === answer.toLowerCase()) {
    price += 10;
    console.log(chalk.bgGreen("\nYou are right"));
    console.log(chalk.green("\nYou earned Rs.10k"))
    console.log(chalk.yellow("\nYour current balance is Rs. " + chalk.red(price) + "k"))
  } else {
    price -= 5;
    console.log(chalk.bgRed("\nOhh Noo !! Wrong answer"));
    console.log(chalk.red("\nYou loosed Rs.5k"))
    console.log(chalk.yellow("\nYour current balance is Rs. " + chalk.red(price) + "k"))
  }

})

for (let i = 0; i < questionSetOne.length; i++) {
  play(questionSetOne[i].question, questionSetOne[i].ans)
}

const playTwo = ((question, answer) => {
  const userAns = readLineSync.question(question + "\n\nYour ans is: ").toString();
  if (userAns.toLowerCase() === answer.toLowerCase()) {
    price += 20;
    console.log(chalk.bgGreen("\nYou are right"));
    console.log(chalk.green("\nYou earned Rs.10k"))
    console.log(chalk.yellow("\nYour current balance is Rs. " + chalk.red(price) + "k"))
  } else {
    price -= 5;
    console.log(chalk.bgRed("\nOhh Noo !! Wrong answer"));
    console.log(chalk.red("\nYou loosed Rs.5k"))
    console.log(chalk.yellow("\nYour current balance is Rs. " + chalk.red(price) + "k"))
  }

})


if (price >= 50) {
  console.log(chalk.bgGreen("\n\n\t\tCONGRATULATIONS YOU HAVE EARNED RS. 50K\n"));
  console.log(chalk.bgBlue("\n\t\tGOOD GOING CHAMP !!! YOU HAVE QUALIFIED FOR LVL 2. THIS TIME THE GAME BECOMES MORE EXCITING !!!\n"))
  console.log(chalk.red("\n\t\tA change in the Rule\n\n"))
  console.log(chalk.bgRed("\n\t\tEACH ROGHT ANSWER NOW GIFTS YOU RS. 20K\n\n"))
  for (let i = 0; i < questionSetTwo.length; i++) {
    playTwo(questionSetTwo[i].question, questionSetTwo[i].ans)
  }
} else {
  console.log(chalk.green("\n\t\tYOUR CURRENT BALANCE IS RS. " + price + " k"))
  console.log(chalk.green("\n\t\tWe have to end the game here as you didn't qualify for LVL 2."));
  console.log(chalk.underline.bgBlue("\n\n\t\tThanks for participating " + name + " in the game. We have a great time with you"));
}
console.log(chalk.green("\n\t\tYOUR CURRENT BALANCE IS RS. " + price + " k"))
console.log(chalk.underline.bgBlue("\n\n\t\tThanks for participating " + name + " in the game. We have a great time with you"));


// console.log(questions[0].question)