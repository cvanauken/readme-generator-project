// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'username',
        message: 'enter github username',
        validate: usernameInput => {
            if (usernameInput){
                return true;
            } else {
                console.log('please enter username');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'enter your email',
        validate: emailInput => {
            if (emailInput){
                return true;
            } else {
                console.log('please enter email')
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'title',
        message: 'enter your project title',
        validate: titleInput => {
            if (titleInput){
                return true;
            } else {
                console.log('please enter project title')
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'what',
        message: 'what problem does your project solve?',
        validate: whatInput => {
            if (whatInput){
                return true;
            } else {
                console.log('please describe what your project is')
                return false
            }
        }
    },
    {
        type: 'input',
        name: 'how',
        message: 'how will your project solve this problem',
        validate: howInput => {
            if (howInput){
                return true;
            } else {
                console.log('please describe how your project works')
                return false
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'please provide installation instructions',
        validate: installInput => {
            if (installInput){
                return true;
            } else {
                console.log('please provide installation instructions')
                return false
            }
        }
    },
    {
        type: 'list',
        name: 'license',
        message: 'Which license will you use for your project?',
        choices: ['agpl', 'apache', 'mit', 'no license']
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
