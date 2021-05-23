// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');
const generateReadMe = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
    validate: projectTitle => {
      if (projectTitle) {
        return true;
      } else {
        console.log('Please enter a valid title.');
        return false;
      }
    },
  },
  {
    type: 'input',
    name: 'description',
    message: 'Please provide a description of your project',
  },
  {
    type: 'input',
    name: 'Installation',
    message: 'Please provide instructions for installation',
  },
  {
    type: 'input',
    name: 'Usage',
    message: 'Please provide instructions for usage',
  },
  {
    type: 'input',
    name: 'Contributing',
    message: 'Please provide any guidlines for contribution',
  },
  {
    type: 'input',
    name: 'Tests',
    message: 'What are the test instructions?',
  },
  {
    type: 'list',
    name: 'license',
    message: 'What license are you using for this project?',
    choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
  },
  {
    type: 'input',
    name: 'github',
    message: 'Please enter your GitHub username',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Please enter your email address',
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then(inquirerResponses => {
    writeToFile('readme.md', generateReadMe({ ...inquirerResponses }));
  });
}

// Function call to initialize app
init();
