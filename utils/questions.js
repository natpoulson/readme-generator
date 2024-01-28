const inquirer = require("inquirer");

class Questions {
    static message = {
        welcome: `Welcome to the README Generator.\nThis app will pose you a series of questions to help customise and create a professional README file.\nYou'll be asked a series of questions to customise the contents, and then given the option to edit the generated README.`
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
                value: "motivation"
            },
            {
                name: "Focus (What the app is designed to solve)",
                value: "focus"
            },
            {
                name: "Method (How the app accomplishes its goal)",
                value: "method"
            },
            {
                name: "Features (Main capabilities of the app)",
                value: "features"
            },
            new inquirer.Separator(" "),
            {
                name: "Installation",
                disabled: "For apps that require setup before use"
            },
            new inquirer.Separator("========"),
            {
                name: "Prerequisites (Apps or runtimes required to run)",
                value: "prerequisites"
            },
            {
                name: "Quick Start (Summary steps for a bare-minimum start)",
                value: "quickstart"
            },
            {
                name: "Configuration (Settings that should be reviewed first)",
                value: "configuration"
            },
            new inquirer.Separator(" "),
            {
                name: "Usage",
                disabled: "Instructions on how to use core features of your app"
            },
            new inquirer.Separator("========"),
            {
                name: "Media (Screenshots or animations demonstrating the app)",
                value: "media"
            },
            new inquirer.Separator(" "),
            {
                name: "Contribute",
                disabled: "Information about how others can help out"
            },
            new inquirer.Separator("========"),
            {
                name: "Tests (What are included, and how to use them)",
                value: "tests"
            },
            {
                name: "Guidelines (Code of Conduct, Instructions, etc)",
                value: "guidelines"
            },
            {
                name: "Priority Items (What needs immediate attention)",
                value: "priority"
            },
            new inquirer.Separator(" "),
            {
                name: "Socials",
                value: "socials"
            }
        ]
    };

    static socials = [
        {
            name: "email",
            message: `Email:`,
            type: 'input',
            validate: (test) => /^.+?@.+?\.\w$/.test(test)
        },
        {
            name: "github",
            message: `Github:`,
            type: 'input'
        },
        {
            name: "linkedin",
            message: `LinkedIn:`,
            type: 'input'
        },
        {
            name: "facebook",
            message: `Facebook:`,
            type: 'input'
        },
        {
            name: "twitter",
            message: `Twitter:`,
            type: 'input'
        }
    ]

    static async ask() {
        console.log(Questions.message.welcome);

        const requiredAnswers = await inquirer.prompt(Questions.required);
        const sectionAnswers = await inquirer.prompt(Questions.sections);

        let socialAnswers;
        if (sectionAnswers.sections.includes("socials")) {
            socialAnswers = await inquirer.prompt(Questions.socials);
        }
        
    }
}

module.exports = Questions;