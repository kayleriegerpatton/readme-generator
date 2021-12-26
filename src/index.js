// external imports
const inquirer = require("inquirer");

// import js modules
const questions = require("./questions");
const { writeToFile } = require("./writeFile.js");
const { generateReadme } = require("./constructReadme.js");

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
