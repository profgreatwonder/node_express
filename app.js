// this is not an ideal way of sending large files to your users on request. the best option is to chunk the code using the create readStream
// var http = require("http");
// var fs = require("fs");

// http
// 	.createServer((req, res) => {
// 		const text = fs.readFileSync("./content/big.txt", "utf8");
// 		res.end(text);
// 	})
// 	.listen(5000);

var http = require("http");
var fs = require("fs");

http
	.createServer((req, res) => {
		const fileStream = fs.createReadStream("./content/big.txt", "utf8");
		fileStream.on("open", () => {
			// instead of going with res.end, the text, there is res.pipe method. what it does is to push from the readstream into writestream. what this means is that we can read and write data in chunks. under the hood, response object can be set up as a writeable stream.
			// first we have our file stream, which is our readstream, then we have our method of pipe which we are piping into a writeable stream, then we pass in the response object

			fileStream.pipe(res);
		});
		fileStream.on("error", (err) => {
			res.end(err);
		});
	})
	.listen(5000);
