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
    name: "deployedUrlConfirm",
    message: "Include a deployed URL?",
    default: false,
  },
  {
    type: "input",
    name: "deployedUrl",
    message: "Enter the deployed app's URL:",
    when: (answers) => answers.deployedUrlConfirm,
  },
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
    validate: (email) => {
      return (
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) ||
        "Please enter a valid email."
      );
    },
  },
  {
    type: "input",
    name: "username",
    message: "GitHub username:",
    validate: (username) => {
      return (
        // Thanks to @shinnn's "GitHub-username-regex" (https://github.com/shinnn/github-username-regex)
        /^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/i.test(username) ||
        "Please enter a valid GitHub username."
      );
    },
  },
  {
    type: "confirm",
    name: "screenshots",
    message: "Include screenshots?",
    default: true,
  },
  {
    type: "confirm",
    name: "demoVideoConfirm",
    message: "Include a demo video?",
    default: false,
  },
  {
    type: "input",
    name: "demoVideo",
    message: "Enter the demo video's URL:",
    when: (answers) => answers.demoVideoConfirm,
  },
];

module.exports = questions;
