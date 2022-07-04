// FILE SYSTEM MODULE
// there are 2 ways to deal with file module:
// 1. Asynchronously or non-blocking
// 2. Synchronously or blocking

// ASYNC METHOD OR NON-BLOCKING METHOD
const { readFile, writeFile } = require("fs");
// or
// const fs = require('fs')
// fs.readFileSync()
// fs.writeFileSync()

// the async method works, we need to provide a callback which will run when we are done. whenever the functionality that was set is done, then we run the callback.
console.log("start");
readFile("./content/first.txt", "utf8", (err, result) => {
	if (err) {
		console.log(err);
		return;
	}
	// console.log(result); //this will return a buffer if we dont pass an argument for the utf8, 'utf8'.

	// the next callback will be set here inside the first callback. here we want to read the second file.
	const firstText = result;
	readFile("./content/second.txt", "utf8", (err, result) => {
		if (err) {
			console.log(err);
			return;
		}

		const secondText = result;
		writeFile(
			"./content/asyncFile.txt",
			` Here is the result of first and second files: ${firstText} and ${secondText}`,
			(err, result) => {
				if (err) {
					console.log(err);
					return;
				}
				console.log(result);
				console.log("done with this task");
			}
		);
	});
});
console.log("starting a new task");

// what has been written here is something called a callback hell. A better way to handling them is using promises and async and await.

// a nicer code can be found in "2_asyncPatterns/readFiles.js"
