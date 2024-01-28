const inquirer = require("inquirer");

class Questions {
    static sections = {
        name: "sections",
        message: `Specify what optional sections should be included in your README`,
        type: "checkbox",
        loop: false,
        choices: [
            {
                name: "Description",
                disabled: "General information about your app"
            },
            new inquirer.Separator("========"),
            {
                name: "Motivation (Why you built the app)",
                value: "description.motivation"
            },
            {
                name: "Focus (What the app is designed to solve)",
                value: "description.focus"
            },
            {
                name: "Method (How the app accomplishes its goal)",
                value: "description.method"
            },
            {
                name: "Features (Main capabilities of the app)",
                value: "description.features"
            },
            new inquirer.Separator(" "),
            {
                name: "Installation",
                disabled: "For apps that require setup before use"
            },
            new inquirer.Separator("========"),
            {
                name: "Prerequisites (Apps or runtimes required to run)",
                value: "installation.prerequisites"
            },
            {
                name: "Quick Start (Summary steps for a bare-minimum start)",
                value: "installation.quickstart"
            },
            {
                name: "Configuration (Settings that should be reviewed first)",
                value: "installation.configuration"
            },
            new inquirer.Separator(" "),
            {
                name: "Usage",
                disabled: "Instructions on how to use core features of your app"
            },
            new inquirer.Separator("========"),
            {
                name: "Media (Screenshots or animations demonstrating the app)",
                value: "usage.media"
            },
            new inquirer.Separator(" "),
            {
                name: "Contribute",
                disabled: "Information about how others can help out"
            },
            new inquirer.Separator("========"),
            {
                name: "Tests (What are included, and how to use them)",
                value: "contribute.tests"
            },
            {
                name: "Guidelines (Code of Conduct, Instructions, etc)",
                value: "contribute.guidelines"
            },
            {
                name: "Priority Items (What needs immediate attention)",
                value: "contribute.priority"
            },
            new inquirer.Separator(" "),
            {
                name: "Socials",
                disabled: "Links and contact information"
            },
            new inquirer.Separator("========"),
            {
                name: "Email",
                value: "socials.email"
            },
            {
                name: "Github",
                value: "socials.github"
            },
            {
                name: "LinkedIn",
                value: "socials.linkedin"
            },
            {
                name: "Twitter",
                value: "socials.twitter"
            }
        ]
    };

    static required = [
        {
            name: "description.title",
            message: `What is the name of your app?\n\t`,
            type: 'input'
        },
        {
            name: "description.summary",
            message: `What does your app do?\n\t`,
            type: 'input'
        },
        {
            name: "license",
            message: `What license will you be attributing to this project?`,
            type: 'list',
            choices: [
                {
                    name: 'GNU AGPL v3',
                    value: 'agpl3'
                },
                {
                    name: 'GNU GPL v3',
                    value: 'gpl3'
                },
                {
                    name: 'GNU LGPL v3',
                    value: 'lgpl3'
                },
                {
                    name: 'Mozilla Public License 2.0',
                    value: 'mpl2'
                },
                {
                    name: 'Apache License 2.0',
                    value: 'al2'
                },
                {
                    name: 'MIT License',
                    value: 'mit'
                },
                {
                    name: 'Boost Software License 1.0',
                    value: 'boost1'
                },
                {
                    name: 'The Unlicense',
                    value: 'unlicense'
                }
            ]
        }
    ];

    static ask() {
        inquirer.prompt(Questions.sections)
            .then(answers => console.log(answers));
    }
}

module.exports = Questions;