// import inquirer
const inquirer = require("inquirer");

// import fs
const fs = require("fs");

// import js modules
const writeToFile = require("../src/writeFile.js");
const generateReadme = require("../src/constructReadme.js");

// questions list
const questions = [
  { type: "input", name: "title", message: "Project title:" },
  {
    type: "input",
    name: "fileName",
    message: "File name (exclude file extension):",
  },
  { type: "input", name: "description", message: "Project description:" },
  {
    type: "confirm",
    name: "installConfirm",
    message: "Does the application require installation script(s)?",
    default: false,
  },
  {
    type: "input",
    name: "installInstructions",
    message: "Script(s) to install the application:",
    when: (answers) => answers.installConfirm,
  },
  {
    type: "confirm",
    name: "usageConfirm",
    message: "Does the application require a usage script?",
    default: false,
  },
  {
    type: "input",
    name: "usageInstructions",
    message: "Script(s) to use the application:",
    when: (answers) => answers.usageConfirm,
  },
  {
    type: "confirm",
    name: "testConfirm",
    message: "Does the application have test scripts?",
    default: false,
  },
  {
    type: "input",
    name: "testInstructions",
    message: "Script(s) to test the application:",
    when: (answers) => answers.testConfirm,
  },
  {
    type: "list",
    name: "license",
    message: "Choose a license:",
    choices: [
      { name: "MIT License", value: "MIT" },
      { name: "GNU General Public License", value: "GNUGPLv3" },
      { name: "Apache License 2.0", value: "Apache" },
    ],
  },
  {
    type: "input",
    name: "email",
    message: "Email:",
  },
  {
    type: "confirm",
    name: "screenshots",
    message: "Include screenshots?",
    default: true,
  },
];

const init = async () => {
  // prompt questions w/ inquirer
  const { fileName, ...answers } = await inquirer.prompt(questions);

  // generate README using answers
  const readme = generateReadme(answers);

  // write generated readme to a file
  writeToFile(`${fileName}.md`, readme);
};

// run prompt questions
init();
