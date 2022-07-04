// PATH MODULE

const path = require("path");

// seperator property in the path module
console.log(path.sep);

// join method which joins a sequence of paths segments using that platform specific separator as delimeter. it returns a normalized resulting path

const filePath = path.join("./content", "/subfolder", "text.txt");
console.log(filePath);

// to get the last part of the filepath which is the text.txt,

const base = path.basename(filePath);
console.log(base);

// to return an absolute path, we have path.resolve, it accepts a sequence of paths or path segments and resolves it into an absolute path.
const absolutePath = path.resolve(
	__dirname,
	"content",
	"subfolder",
	"test.txt"
);

console.log(absolutePath);
