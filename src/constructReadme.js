// get individual readme sections from user input

// generate title and license badge
const generateTitle = (title, license) => {
  return `# ${title} ![${license}](https://img.shields.io/static/v1?label=${license}&message=License&color=blueviolet)`;
};

// generate getting started section in TOC
const generateGettingStarted = (
  installInstructions,
  usageInstructions,
  testInstructions
) => {
  if (installInstructions || usageInstructions || testInstructions) {
    return true;
  }
};

// generate table of contents
const generateTableOfContents = ({
  deployedUrl,
  installInstructions,
  usageInstructions,
  testInstructions,
  screenshots,
  demoVideo,
}) => {
  return `## Table of Contents
  - [Description](#description)
    - [Technologies](#technologies)
    ${deployedUrl ? "- [Deployed Application](#deployed-application)" : ""} 
  ${
    generateGettingStarted(
      installInstructions,
      usageInstructions,
      testInstructions
    )
      ? "- [Getting Started](#getting-started)"
      : ""
  }
    ${installInstructions ? "- [Installation](#installation)" : ""}
    ${usageInstructions ? "- [Usage](#usage)" : ""}
    ${testInstructions ? "- [Tests](#tests)" : ""}
  - [Questions](#questions)
  - [License](#license)
  ${screenshots ? "- [Screenshots](#screenshots)" : ""}
  ${demoVideo ? "- [Demo Video](#demo-video)" : ""}`;
};

// generate project description text
const generateDescription = (description) => {
  return `## Description\n
  ${description}`;
};

const generateTechnologies = (technologies) => {
  const allTech = technologies.join("\n- ");

  return `### Technologies \n
  - ${allTech}`;
};

const generateDeployedUrl = (deployedUrl) => {
  return `### Deployed Application
  View the [live application](${deployedUrl}).`;
};

// generate installation instructions section
const generateInstallation = (installInstructions) => {
  return `### Installation\n 
  Run the following script to install the application:\n
  \`\`\`
  ${installInstructions}
  \`\`\`
  `;
};

// generate usage instructions section
const generateUsage = (usageInstructions) => {
  return `### Usage\n
  Run the following script to use the application:\n
  \`\`\`
  ${usageInstructions}
  \`\`\``;
};

// generate test instructions section
const generateTests = (testInstructions) => {
  return `### Tests\n
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

const generateDemoVideo = (demoVideo) => {
  return `## Demo Video
  View the [demo video](${demoVideo}).`;
};

// construct full README using sections
const generateReadme = (answers) => {
  const {
    title,
    deployedUrl,
    description,
    technologies,
    installInstructions,
    usageInstructions,
    testInstructions,
    license,
    email,
    username,
    screenshots,
    demoVideo,
  } = answers;

  return `${generateTitle(title, license)}
    
${generateTableOfContents({
  deployedUrl,
  installInstructions,
  usageInstructions,
  testInstructions,
  screenshots,
  demoVideo,
})}

${generateDescription(description)}

${generateTechnologies(technologies)}

${deployedUrl ? generateDeployedUrl(deployedUrl) : ""}
  
${
  generateGettingStarted(
    installInstructions,
    usageInstructions,
    testInstructions
  )
    ? "## Getting Started"
    : ""
}

   ${installInstructions ? generateInstallation(installInstructions) : ""}
    
   ${usageInstructions ? generateUsage(usageInstructions) : ""}
   
   ${testInstructions ? generateTests(testInstructions) : ""}
    
${generateQuestions(email, username)}
    
${generateLicense(license)}
    
${screenshots ? "## Screenshots" : ""}
   
${demoVideo ? generateDemoVideo(demoVideo) : ""} 
   `;
};

module.exports = { generateReadme };
