const writeToFile = (filePath, readme) => {
  try {
    fs.writeFileSync(filePath, readme);
  } catch (error) {
    console.log(error.message);
  }
};

module.exports{}
