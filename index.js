// TODO: Include packages needed for this application
const fs = require("fs");
const { Questions } = require("./utils/questions.js");

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    Questions.ask()
        // .then(responses => {
        //     const [required, sections, socials] = responses;
        //     // Generate the sections
        // });
}

// Function call to initialize app
init();
