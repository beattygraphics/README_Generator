// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input

const asyncWrite = util.promisify(fs.writeFile);

inquirer
  .prompt([
    const questions = [
        {
            message: "Please, Enter your project title",
            type: "input"
        },
        {
            message: "Please, Enter the project description",
            type: "input"
        },
        {
            message: "Please, Enter the project's installation procedures",
            type: "input"
        },
        {
            message: "Please, Enter usage instructions",
            type: "input"
        },
        {
            message: "Please, Select License Type",
            type: "list",
            choices: ["GPL V3", "MIT", "MPL V2"]
        },
        {
            message: "Please, Enter contribution guide for this project",
            type: "input"
        },
    
        {
            message: "Please, Enter tests that can be applied to your project",
            type: "input"
        },
        {
            message: "Please, Enter your e-mail address",
            type: "input"
        },
        {
            message: "Please, Enter your GitHub username",
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
    'Questions'
]

// TODO: Create a function to write README file
async function writeToFile (data) {
    try {
        await asyncWrite("README.md", generateMarkdown.generateMarkdown(data));
        console.log("Your README.md was created successfully.");
    } catch(err) {
        console.log(err);
    }
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        writeToFile(answers);
    });
};
// Function call to initialize app
init();
