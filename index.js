const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [

        {
        type: 'input',
        name: 'title',
        message: "what is the Title",
        },
        {
        type: 'input',
        name: 'description',
        message: "what is the description",
        },
        {
        type: 'input',
        name: 'installation',
        message: "what is the installation instructions",
        },
        {
        type: 'input',
        name: 'usage',
        message: "What is the usage of this application",
        },
        {
          type: 'input',
          name: 'license',
          message: "What is the license of this application? /n a) MIT b) default",
        },
        {
          type: 'input',
          name: 'contribution',
          message: "Who has contributed to this?",
        },
        {
          type: 'input',
          name: 'test',
          message: "What are the instructions to test this application?",
          },
        {
            type: 'input',
            name: 'github_name',
            message: "What is your github username?",
        },
        {
          type: 'input',
          name: 'email',
          message: "What is your email?",
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
    .then((answers) => writeToFile(answers.title+".md", answers))
    .then(() => console.log('Successfully wrote to readme'))
    .catch((err) => console.error(err));
}

// function call to initialize program
init();
