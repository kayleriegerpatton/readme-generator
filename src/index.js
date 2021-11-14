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
  },
  {
    type: "confirm",
    name: "usageConfirm",
    message: "Does the application require a usage script?",
    default: false,
  },
  {
    type: "confirm",
    name: "testConfirm",
    message: "Does the application have test scripts?",
    default: false,
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
  //   {
  //     type: "input",
  //     name: "gitHubName",
  //     message: "GitHub username:",
  //   },
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

const installQuestion = [
  {
    type: "input",
    name: "installInstructions",
    message: "Script(s) to install the application:",
  },
];

const usageQuestion = [
  {
    type: "input",
    name: "usageInstructions",
    message: "Script(s) to use the application:",
  },
];

const testQuestion = [
  {
    type: "input",
    name: "testInstructions",
    message: "Script(s) to test the application:",
  },
];

// generate title and license badge
const generateTitle = (answers) => {
  return `# ${answers.title} ![${answers.license}](https://img.shields.io/static/v1?label=${answers.license}&message=License&color=blueviolet)`;
};

// generate project description text
const generateDescription = (answers) => {
  return `## Description

  ${answers.description}`;
};

const generateTableOfContents = (answers) => {
  return `  ## Table of Contents
  
  ${answers.installConfirm ? "- [Installation](#installation)" : ""}
  ${answers.usageConfirm ? "- [Usage](#usage)" : ""}
  ${answers.testConfirm ? "- [Tests](#tests)" : ""}
  - [Contributing](#contributing)
  - [License](#license)
  ${answers.screenshots ? "- [Screenshots](#screenshots)" : ""}`;
};

// WORK ON THIS (needs to take in a different answer object)

// const generateInstallation = () => {
//   return (
//     `Run the following script to test the application:

//     /` /
//     `
//     ${}
//     /` /
//     ``
//   );
// };

// const generateUsage = () => {
//   return ``;
// };

const generateContributing = (answers) => {
  return `## Contributing

  To contribute to this project, please [email](mailto:${answers.email}) me.`;
};

// generate license section
const generateLicense = (answers) => {
  return `## License
${answers.license} License`;
};

const generateReadme = (answers) => {
  //   call functions within placeholders, passing in answers data
  //   ternary operator conditionals for installation, contributing, usage
  return `${generateTitle(answers)}

 ${generateDescription(answers)}
  
 ${generateTableOfContents(answers)}

 ${answers.installConfirm ? generateInstallation() : ""}
  
 ${answers.usageConfirm ? generateUsage() : ""}
 
 ${answers.testConfirm ? generateTests() : ""}
  
  ${generateContributing(answers)}
  
 ${generateLicense(answers)}
  
  ## Screenshots
  `;
};

const init = async () => {
  // prompt questions w/ inquirer
  const answers = await inquirer.prompt(questions);

  if (answers.installConfirm) {
    //   get installation instructions
    const installAnswer = await inquirer.prompt(installQuestion);
  }

  if (answers.usageConfirm) {
    // get usage instructions
    const usageAnswer = await inquirer.prompt(usageQuestion);
  }

  if (answers.testConfirm) {
    //   get testing instructions
    const testAnswer = await inquirer.prompt(testQuestion);
  }

  //   console.log(answers);
  //   console.log(installAnswer);

  // generate README using answers
  const readme = generateReadme(answers);
  console.log(readme);

  //   // write generated readme to a file
  //   writeToFile("", readme);
};

// run prompt questions
init();
