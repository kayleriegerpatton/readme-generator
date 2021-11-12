// import inquirer
const inquirer = require("inquirer");

// import fs
const fs = require("fs");

// questions list
const questions = [{}];

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

  // generate README using answers
  const readme = generateReadme();

  // write generated readme to a file
  writeToFile("", readme);
};

// run prompt questions
init();
