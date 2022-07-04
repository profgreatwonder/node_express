// FILE SYSTEM MODULE
// there are 2 ways to deal with file module:
// 1. Asynchronously or non-blocking
// 2. Synchronously or blocking

// SYNCHRONOUS OR BLOCKING METHOD
const { readFileSync, writeFileSync } = require("fs");
// or
// const fs = require('fs')
// fs.readFileSync()
// fs.writeFileSync()

// we want to read from the file system using the readFileSync method. It takes in 2 parameters, the first is the path to the specific file that we want to read from and the second is the encoding(so that node knows how to decode a file)
const firstFile = readFileSync("./content/first.txt", "utf8");
const secondFile = readFileSync("./content/second.txt", "utf8");
console.log(firstFile, secondFile);

// next, we want to create a new file
// writeFileSync(
// 	"./content/thirdFile.txt",
// 	`Here is the result of first and second files: ${firstFile} and ${secondFile}`
// );

// we can append to the file. we do this by using the object {flag: 'a}
writeFileSync(
	"./content/thirdFile.txt",
	` Here is the result of first and second files: ${firstFile} and ${secondFile}`,
	{ flag: "a" }
);
