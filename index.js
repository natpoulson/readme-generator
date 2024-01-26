// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
const questions = [
    {
        name: 'title',
        message: "What is your app called?",
        type: 'input'
    },
    {
        name: 'description',
        message: `Provide a description for your app. Good descriptions typically address:
        - The inspiration for the app
        - What goal the app is meant to accomplish
        - How the app meets that goal`,
        type: 'editor'
    },
    {
        name: 'installation',
        message: `Provide some instructions on how to install or set up your app. This can include:
        - How to install the app via NPM (if published)
        - How to set up any initial configuration files, and where to find them
        - Any changes to the system needed for the app to run`,
        type: 'editor'
    },
    {
        name: 'usage',
        message: `Provide visitors with instructions on how to:
        - Start (or navigate to) your app, or a demo instance
        - Where to find and use core featurees of the app
        - (If a console based app) provide a mockup of some commands to show how they work
        - One or more screenshots (or animated screenshots) demonstrating the app in action`,
        type: 'editor'
    },
    {
        name: 'contributing',
        message: `Provide guidance on how prospective developers can help contribute to your app, this can include:
        - Outlining parts of the app or repo that need extra attention
        - Guidelines on what must be done to successfully submit changes
        - An outline of the workflow leveraged by contributors`,
        type: 'editor'
    },
    {
        name: 'tests',
        message: `Let developers know what tests your repo includes and must pass for validation`,
        type: 'editor'
    },
    {
        name: 'knownIssues',
        message: `If there are any known issues that users should be aware of, list them here`,
        type: 'editor'
    },
    {
        name: 'questions',
        message: `If there are any frequently asked questions, answer them here`,
        type: 'editor'
    },
    {
        name: 'license',
        message: 'What license are you releasing this app under?',
        type: 'list',
        choices: [
            'Apache v2',
            'GPL v2',
            'GPL v2.1',
            'GPL v3',
            'MIT',
            'Mozilla v2',
            'Unlicense'
        ]
    },
    {
        name: 'github',
        message: 'What is your Github username?',
        type: 'input'
    },
    {
        name: 'email',
        message: "What's your email address?",
        type: 'input',
        validate: (test) => {
            return /^.+?@.+?\.\w$/.test(test);
        }
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
