const inquirer = require("inquirer");
const TreePrompt = require("inquirer-tree-prompt");
inquirer.registerPrompt('tree', TreePrompt);

class Questions {
    static sections = {
        name: "sections",
        message: `Specify what optional sections should be included in your README`,
        type: "tree",
        loop: false,
        tree: [
            {
                name: "Description",
                value: "desc",
                open: false,
                multiple: true,
                children: [
                    {
                        name: "Motivation | What was the impetus for building this app?",
                        value: "desc.motivation"
                    },
                    {
                        name: "Focus | What does the app aim to solve?",
                        value: "desc.focus"
                    },
                    {
                        name: "Method | How does the app accomplish its goal?",
                        value: "desc.method"
                    },
                    {
                        name: "Features | What are the main capabilities of the app?",
                        value: "desc.features"
                    }
                ]
            },
            {
                name: "Installation",
                value: "install",
                open: false,
                multiple: true,
                children: [
                    {
                        name: "Prerequisites | Outline what must be installed first",
                        value: "install.prerequisites"
                    },
                    {
                        name: "Quick Start | Provide a quick setup guide using defaults",
                        value: "install.quickstart"
                    },
                    {
                        name: "Configuration | Advise of important settings to change prior to use",
                        value: "install.configuration"
                    }
                ]
            },
            {
                name: "Usage",
                value: "usage",
                open: false,
                multiple: true,
                children: [
                    {
                        name: "Demo Media | Include one or more screenshots or clips of the app being used",
                        value: "usage.demomedia"
                    }
                ]
            },
            {
                name: "Contribution",
                value: "contribution",
                open: false,
                multiple: true,
                children: [
                    {
                        name: "Guidelines | Provide guidance on how they can help",
                        value: "contribution.guidelines"
                    },
                    {
                        name: "Tests | If you use a testing suite, advise developers what is available",
                        value: "contribution.tests"
                    },
                    {
                        name: "Priority Focus | Inform devs which areas require the most attention",
                        value: "contribution.priority"
                    }
                ]
            },
            {
                name: "Socials",
                value: "socials",
                open: false,
                multiple: true,
                children: [
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
}

module.exports = Questions;