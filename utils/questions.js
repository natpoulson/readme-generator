const inquirer = require("inquirer");

class Answers {
    static license = {
        AGPL3: 'GNU AGPL v3',
        GPL3: 'GNU GPL v3',
        LGPL3: 'GNU LGPL v3',
        MOZILLA2: 'Mozilla Public License 2.0',
        APACHE2: 'Apache License 2.0',
        MIT: 'MIT License',
        BOOST: 'Boost Software License 1.0',
        UNLICENSE: 'The Unlicense'
    };
}

class Questions {
    static required = [
        {
            name: "title",
            message: `What is the name of your app?\n`,
            type: 'input'
        },
        {
            name: "summary",
            message: `What does your app do?\n`,
            type: 'input'
        },
        {
            name: "license",
            message: `What license will you be attributing to this project?`,
            type: 'ITEMS',
            choices: [
                Answers.license.AGPL3,
                Answers.license.GPL3,
                Answers.license.LGPL3,
                Answers.license.MOZILLA2,
                Answers.license.MIT,
                Answers.license.BOOST,
                Answers.license.UNLICENSE
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
            validate: (test) => /^.+@.+\.\w+$/.test(test)
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

    static loop = {
        name: 'loop',
        message: 'Would you like to add more?',
        type: 'confirm'
    }

    static async askLoop(...questions) {
        let answers = [];
        let answerSet = [];

        do {
            answerSet = {};

            for (const question of questions) {
                answerSet[question.name] = (await inquirer.prompt(question))[question.name];
            }

            answers.push(answerSet);
        } while (await inquirer.prompt(Questions.loop)
            .then(answer => answer.loop));

        return answers;
    }

    static async ask() {
        // console.log(`Welcome to the README Generator.\nThis app will pose you a series of questions to help customise and create a professional README file.\nSome sections will ask you questions multiple times if you have a lot to add.`);

        // const requiredAnswers = await inquirer.prompt(Questions.required);

        const testAnswers = await Questions.askLoop({name: 'testQuestion', message: 'Tell me something', type:'input'});
        console.log(testAnswers);
        // const sectionAnswers = await inquirer.prompt(Questions.sections);

        // let socialAnswers = [];
        // if (sectionAnswers.sections.includes("socials")) {
        //     socialAnswers = await inquirer.prompt(Questions.socials);
        // }

        // return [requiredAnswers, sectionAnswers, socialAnswers];
    }
}

module.exports = {
    Questions,
    Answers
};