// TODO: Include packages needed for this application
const fs = require("fs");
const Questions = require("./utils/questions.js");
const markdown = require("./utils/generateMarkdown.js");

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    Questions.ask()
        .then(responses => {
            const [required, sections, socials] = responses;
            console.log(markdown.renderLicenseBadge(required.license));
            console.log(markdown.renderLicenseLink(required.license));
            console.log(markdown.renderLicenseSection(required.license));
        });
}

// Function call to initialize app
init();
