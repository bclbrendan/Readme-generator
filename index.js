const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'filename',
        message: "what is the file name",
        },
        {
        type: 'input',
        name: 'title',
        message: "what is the Title",
        },
];

// function to write README file
function writeToFile(fileName, data) {
    const writeFile = fs.writeFile(fileName, generateMarkdown(data), (err) => {
        if (err)
          console.log(err);})
        
        }


// function to initialize program
function init() {

    inquirer.prompt(questions)
    .then((answers) => writeToFile('RobotReadme.md', answers))
    .then(() => console.log('Successfully wrote to readme'))
    .catch((err) => console.error(err));
}

// function call to initialize program
init();
