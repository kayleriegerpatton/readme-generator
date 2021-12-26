// external imports
const fs = require("fs");
const colors = require("colors");

colors.setTheme({
  success: ["bgGreen", "black"],
  warning: ["bgBrightYellow", "black", "bold"],
  fail: ["bgRed", "white", "bold"],
  message: ["bgWhite", "black"],
});

// write data to new file
const writeToFile = (filePath, readme) => {
  try {
    fs.writeFileSync(filePath, readme);
    console.log("New file created!".success);
  } catch (error) {
    console.log(`[ERROR] Failed to write file: ${error.message}`.fail);
  }
};

module.exports = { writeToFile };
