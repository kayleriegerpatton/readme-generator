// get individual readme sections from user input

// generate title and license badge
const generateTitle = (title, license) => {
  return `# ${title} ![${license}](https://img.shields.io/static/v1?label=${license}&message=License&color=blueviolet)`;
};

// generate table of contents
const generateTableOfContents = ({
  installInstructions,
  usageInstructions,
  testInstructions,
  screenshots,
}) => {
  return `## Table of Contents
  - [Description](#description)
  ${installInstructions ? "- [Installation](#installation)" : ""}
  ${usageInstructions ? "- [Usage](#usage)" : ""}
  ${testInstructions ? "- [Tests](#tests)" : ""}
  - [Questions](#questions)
  - [License](#license)
  ${screenshots ? "- [Screenshots](#screenshots)" : ""}`;
};

// generate project description text
const generateDescription = (description) => {
  return `## Description\n
  ${description}`;
};

// generate installation instructions section
const generateInstallation = (installInstructions) => {
  return `## Installation\n 
  Run the following script to install the application:\n
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
const generateQuestions = (email, username) => {
  return `## Questions
  To contribute to or ask questions about this project, please contact me via [email](mailto:${email}) or [GitHub](https://github.com/${username}).`;
};

// generate license section
const generateLicense = (license) => {
  return `## License\n
${license} License`;
};

// construct full README using sections
const generateReadme = (answers) => {
  const {
    title,
    description,
    installInstructions,
    usageInstructions,
    testInstructions,
    license,
    email,
    username,
    screenshots,
  } = answers;

  return `${generateTitle(title, license)}
    
   ${generateTableOfContents({
     installInstructions,
     usageInstructions,
     testInstructions,
     screenshots,
   })}

   ${generateDescription(description)}
  
   ${installInstructions ? generateInstallation(installInstructions) : ""}
    
   ${usageInstructions ? generateUsage(usageInstructions) : ""}
   
   ${testInstructions ? generateTests(testInstructions) : ""}
    
   ${generateQuestions(email, username)}
    
   ${generateLicense(license)}
    
   ${screenshots ? "## Screenshots" : ""}
    `;
};

module.exports = { generateReadme };
