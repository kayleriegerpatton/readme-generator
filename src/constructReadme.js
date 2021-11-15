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
