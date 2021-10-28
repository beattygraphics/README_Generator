const fs = require("fs")
const inquirer = require("inquirer")
const util = require('util')


const asyncWrite = util.promisify(fs.writeFile);

const questions = [
    {
        message: "What is your Project Title?",
        type: "input"
    },
    {
        message: "What is your project description?",
        type: "input"
    },
    {
        message: "What are your installation procedures?",
        type: "input"
    },
    {
        message: "How will your project be used?",
        type: "input"
    },
    {
        message: "Select your License Type",
        type: "list",
        choices: ["APACHE 2.0", "MIT", "PERL", "None"]
    },
    {
        message: "Contribution and Colaboration guidelines",
        type: "input"
    },

    {
        message: "What test(s) are written or applied to project?",
        type: "input"
    },
    {
        message: "What is your e-mail address?",
        type: "input"
    },
    {
        message: "What is your GitHub username?",
        type: "input",
        name: "username"
    }
];
const tableOfContents = [
    'Title',
    'Description',
    'Installation',
    'Usage',
    'License',
    'Contributing',
    'Tests',
    'Questions',
    'Links',
]

tableOfContents.forEach((item, index) => {
    questions[index].name = item
})

//Licenses Badges
const licenses = {
    "APACHE 2.0": "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"

    , "MIT": "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"

    , "PERL": "[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)"
}

// function to write README markdown
function mdWriter(responses) {
    return `${responses.Title}

# ${responses.Title}
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
* [Links](#links)


## Description
${responses.Description}


## Installation
${responses.Installation}


## Usage
${responses.Usage}


## Contributing
${responses.Contributing}


## Tests
${responses.Tests}


## Questions
Any Feedback or questions?
Please, send any question to my e-mail [${responses.Questions}](mailto:${responses.Questions}) and/or visit my profile on [Github](https://github.com/${responses.username})

## Links
Link to Demo can be found here: (https://youtu.be/vF13yRexgjM)

(![Screenshot](/assets/readme_screenshot.png)
)`

}


async function init() {
    try {
        const responses = await inquirer.prompt(questions)
        await asyncWrite(`${responses.Title}.md`, mdWriter(responses))
        console.log(`${responses.Title}.md  was successfully generated`);

    }catch(err) {
        console.log(err)
    }
}

init();