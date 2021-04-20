const fs = require('fs');
const inquirer = require('inquirer');
const util = require('util');
const writeFileAsync = util.promisify(fs.writeFile)
function questionsUser() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is your  team managers name?",
            validate: function (userInput) {
                return userInput.length < 1 ? console.log('Please enter a valid name.') : true;
            }
        },
        {
            type: 'input',
            name: 'location',
            message: "employee id number",
            validate: function (userInput) {
                return userInput.length < 1 ? console.log('Please enter a valid location.') : true;
            }
        },
        {
            type: 'input',
            name: 'hobby',
            message: "email address",
            validate: function (userInput) {
                return userInput.length < 1 ? console.log('Please enter your hobby.') : true;
            }
        },
        {
            type: 'input',
            name: 'food',
            message: "office number ",
            validate: function (userInput) {
                return userInput.length < 1 ? console.log('Please enter your favorite food.') : true;
            }
        },
async function init() {
    try {
        const answers = await questionsUser();
        const generateHTML = generateIndex(answers);
        await writeFileAsync('index.html', generateHTML);
        console.log('Completed!');
    } catch (err) {
        console.log(err);
    }
}
init();
function generateIndex(answers) {
    return ` 
    <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
      <title>Node Mini</title>
}
module.exports = generateIndex;