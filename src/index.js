// import inquirer
const inquirer = require("inquirer");

// import fs
const fs = require("fs");

// questions list
const questions = [
  { type: "input", name: "title", message: "Project title:" },
  { type: "input", name: "description", message: "Project description:" },
  {
    type: "confirm",
    name: "installConfirm",
    message: "Does the application require installation script(s)?",
    default: false,
    // needs conditional for next question^
  },
  {
    type: "confirm",
    name: "usageConfirm",
    message: "Does the application require a usage script?",
    default: false,
    // needs conditional for next question^
  },
  {
    type: "input",
    name: "usageInstructions",
    message: "Script(s) to use the application:",
  },
  {
    type: "list",
    name: "license",
    message: "Choose a license:",
    choices: [
      { name: "MIT License", value: "mit" },
      { name: "GNU General Public License", value: "gnu" },
      { name: "Apache License 2.0", value: "apache" },
    ],
  },
  {
    type: "confirm",
    name: "testConfirm",
    message: "Does the application have test scripts?",
    default: false,
    // needs conditional for next question^
  },
  {
    type: "input",
    name: "testInstructions",
    message: "Script(s) to test the application:",
  },
  {
    type: "input",
    name: "gitHubName",
    message: "GitHub username:",
  },
  {
    type: "input",
    name: "email",
    message: "Email:",
  },
];

const installQuestion = [
  {
    type: "input",
    name: "installInstructions",
    message: "Script(s) to install the application:",
  },
];

const generateTitle = (answers) => {
  return ``;
};

const generateTableOfContents = (answers) => {
  // conditionals for unused sections
  return ``;
};
const generateDescription = (answers) => {
  return ``;
};
const generateInstallation = (answers) => {
  return ``;
};
const generateUsage = (answers) => {
  return ``;
};
const generateContributing = (answers) => {
  return ``;
};
const generateLicense = (answers) => {
  return ``;
};

const generateReadme = (answers) => {
  //   call functions within placeholders, passing in answers data
  //   ternary operator conditionals for installation, contributing, usage
  return ``;
};

const init = async () => {
  // prompt questions w/ inquirer
  const answers = await inquirer.prompt(questions);

  if (answers.installConfirm) {
    //   ask for installation instructions
    const installAnswer = await inquirer.prompt(installQuestion);
  }

  //   // generate README using answers
  //   const readme = generateReadme();

  //   // write generated readme to a file
  //   writeToFile("", readme);
};

// run prompt questions
init();
