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
                disabled: true
            },
            new inquirer.Separator("========"),
            {
                name: "\tMotivation | What was the impetus for building this app?",
                value: "description.motivation"
            },
            {
                name: "\tFocus | What does the app aim to solve?",
                value: "description.focus"
            },
            {
                name: "\tMethod | How does the app accomplish its goal?",
                value: "description.method"
            },
            {
                name: "\tFeatures | What are the main capabilities of the app?",
                value: "description.features"
            },
            new inquirer.Separator(" "),
            {
                name: "Installation",
                disabled: true
            },
            new inquirer.Separator("========"),
            {
                name: "\tPrerequisites | Outline what must be installed first",
                value: "installation.prerequisites"
            },
            {
                name: "\tQuick Start | Provide a quick setup guide using defaults",
                value: "installation.quickstart"
            },
            {
                name: "\tConfiguration | Advise of important settings to change prior to use",
                value: "installation.configuration"
            },
            new inquirer.Separator(" "),
            {
                name: "Usage",
                disabled: true
            },
            new inquirer.Separator("========"),
            {
                name: "\tDemo Media | Include one or more screenshots or clips of the app being used",
                value: "usage.demomedia"
            },
            new inquirer.Separator(" "),
            {
                name: "Contribute",
                disabled: true
            },
            new inquirer.Separator("========"),
            {
                name: "Tests | If you use a testing suite, advise developers what is available",
                value: "contribute.tests"
            },
            {
                name: "Guidelines | Provide guidance on how they can help",
                value: "contribute.guidelines"
            },
            {
                name: "Priority Focus | Inform devs which areas require the most attention",
                value: "contribute.priority"
            },
            new inquirier.Separator(" "),
            {
                name: "Socials",
                disabled: true
            },
            new inquirer.Separator("========"),
            {
                name: "Email | Provide a contact email",
                value: "socials.email"
            },
            {
                name: "Github | Share your Github account",
                value: "socials.github"
            },
            {
                name: "LinkedIn | Share your LinkedIn profile",
                value: "socials.linkedin"
            },
            {
                name: "Twitter | Share your Twitter account",
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