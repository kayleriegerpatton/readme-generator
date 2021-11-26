// get individual readme sections from user input

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
  return `## Table of Contents
  ${installInstructions ? "- [Installation](#installation)" : ""}
  ${usageInstructions ? "- [Usage](#usage)" : ""}
  ${testInstructions ? "- [Tests](#tests)" : ""}
  - [Contributing](#contributing)
  - [License](#license)
  ${screenshots ? "- [Screenshots](#screenshots)" : ""}`;
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
const generateContributing = (email) => {
  return `## Contributing
  To contribute to this project, please [email](mailto:${email}) me.`;
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

module.exports = { generateReadme };
