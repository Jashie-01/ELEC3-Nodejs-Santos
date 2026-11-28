// Full Name: Jasmine De Leon Santos
// Section: IV-BSIT-B
// Activity: N3 - File Manager with fs and path
// Date: November 28,2026


// Built-in modules
const fs = require("fs");     // fs = File System, used to work with files
const path = require("path"); // path is used to build file paths 

// path.join() builds the path to our "files" folder
const filesDir = path.join(__dirname, "files"); // __dirname is the folder where this index.js file is

// If the "files" folder doesn't exist yet, make it
if (!fs.existsSync(filesDir)) {
  fs.mkdirSync(filesDir);
}

// process.argv is the list of everything typed in the terminal
const command = process.argv[2];
const fileName = process.argv[3];
const text = process.argv[4];

// Builds the full path of the file inside the "files" folder
const filePath = path.join(filesDir, fileName || "");

// It makes a new file with the text inside it.
if (command === "create") {
  fs.writeFileSync(filePath, text); // writeFileSync makes the file and puts the text inside it
  console.log(`\nThe file "${fileName}" has been created.\n`);


// It shows what is inside a file.
} else if (command === "read") {

  if (!fs.existsSync(filePath)) {  // existsSync checks if the file exists, and the ! means not
    console.log(`Error: "${fileName}" does not exist in the folder.`);
  } else {
    console.log(`>> The details of "${fileName}":`);
   
    console.log(fs.readFileSync(filePath, "utf8"));  // readFileSync opens the file and gets its text, while "utf8" tells it to read the file as normal text
  }


// It adds more text to the end of a file
} else if (command === "update") {
 
  if (!fs.existsSync(filePath)) {  // It stops with an error message if the file isn't there
    console.log(`Error: "${fileName}" does not exist in the folder.`);
  } else {
   

    fs.appendFileSync(filePath, "\n" + text);  // appendFileSync adds the text to the end of the file (but it keeps the old text)
    console.log(`\nAdded text to "${fileName}".\n`);
  }


// It removes a file
} else if (command === "delete") {
  
  if (!fs.existsSync(filePath)) {
    console.log(`Error: "${fileName}" does not exist in the folder.`);
  } else {
    fs.unlinkSync(filePath);   // unlinkSync deletes the file
    console.log(`\nThe "${fileName}" has been deleted.\n`);
  }

// It shows every file inside the "files" folder
} else if (command === "list") {
  const allFiles = fs.readdirSync(filesDir);

// Go through the file names one by one, the "name" is the current file
  for (const name of allFiles) {
    const fullPath = path.join(filesDir, name); // Build the full path of this file by joining the folder path and the name

    console.log("===========================================================");
    console.log(">> Full path: " + fullPath);                      // the location
    console.log(">> File name: " + path.basename(fullPath));      // basename, like notes.txt
    console.log(">> Extension: " + path.extname(fullPath));       // extname is the extension name, like .txt
    console.log(">> Contents:  " + fs.readFileSync(fullPath, "utf8")); // the text inside the file
  }

} else {
  console.log(`Error: The "${command}" command is not recognized.`); // If the command is not recognized, it shows an error
}