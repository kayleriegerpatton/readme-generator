// import inquirer
const inquirer = require("inquirer");

// import fs
const fs = require("fs");

// import email-validator
const emailValidator = require("email-validator");

const validateEmail = (email) => {
  //   console.log(emailValidator.validate("kayle.patton22@gmail.com"));
  return emailValidator.validate(email);
};

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
  //   {
  //     type: "input",
  //     name: "gitHubName",
  //     message: "GitHub username:",
  //   },
  {
    type: "input",
    name: "email",
    message: "Email:",
    validate: validateEmail(email),
  },
  {
    type: "confirm",
    name: "screenshots",
    message: "Include screenshots?",
    default: true,
  },
];

// generate title and license badge
const generateTitle = (title, license) => {
  return `# ${title} ![${license}](https://img.shields.io/static/v1?label=${license}&message=License&color=blueviolet)`;
};

// generate project description text
const generateDescription = (description) => {
  return `## Description\n
  ${description}`;
};

// generate table of contents
const generateTableOfContents = ({
  installInstructions,
  usageInstructions,
  testInstructions,
  screenshots,
}) => {
  return `  ## Table of Contents
  ${installInstructions ? "- [Installation](#installation)" : ""}
  ${usageInstructions ? "- [Usage](#usage)" : ""}
  ${testInstructions ? "- [Tests](#tests)" : ""}
  - [Contributing](#contributing)
  - [License](#license)
  ${screenshots ? "- [Screenshots](#screenshots)" : ""}`;
};

// generate installation instructions section
const generateInstallation = (installInstructions) => {
  return `Run the following script to test the application:\n
  \`\`\`
  ${installInstructions}
  \`\`\`
  `;
};

// generate usage instructions section
const generateUsage = (usageInstructions) => {
  return `## Usage\n
  Run the following script to use the application:\n
  \`\`\`
  ${usageInstructions}
  \`\`\``;
};

// generate test instructions section
const generateTests = (testInstructions) => {
  return `## Tests\n
  Run the following script to test the application:\n
  \`\`\`
  ${testInstructions}
  \`\`\``;
};

// generate contributing section
const generateContributing = (email) => {
  return `## Contributing
  To contribute to this project, please [email](mailto:${email}) me.`;
};

// generate license section
const generateLicense = (license) => {
  return `## License\n
${license} License`;
};

// construct full README
const generateReadme = (answers) => {
  const {
    title,
    description,
    installInstructions,
    usageInstructions,
    testInstructions,
    license,
    email,
    screenshots,
  } = answers;

  return `${generateTitle(title, license)}

 ${generateDescription(description)}
  
 ${generateTableOfContents({
   installInstructions,
   usageInstructions,
   testInstructions,
   screenshots,
 })}

 ${installInstructions ? generateInstallation(installInstructions) : ""}
  
 ${usageInstructions ? generateUsage(usageInstructions) : ""}
 
 ${testInstructions ? generateTests(testInstructions) : ""}
  
  ${generateContributing(email)}
  
 ${generateLicense(license)}
  
 ${screenshots ? "## Screenshots" : ""}
  `;
};

const writeToFile = (filePath, readme) => {
  try {
    fs.writeFileSync(filePath, readme);
  } catch (error) {
    console.log(error.message);
  }
};

const init = async () => {
  // prompt questions w/ inquirer
  const { fileName, ...answers } = await inquirer.prompt(questions);

  console.log(answers);

  // generate README using answers
  const readme = generateReadme(answers);
  console.log(readme);

  // write generated readme to a file
  writeToFile("generated_README.md", readme);
};

// run prompt questions
init();
