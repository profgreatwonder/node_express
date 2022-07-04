const http = require("http");
const { readFileSync } = require("fs");

// get all files
const homePage = readFileSync("../../Advanced/htmlFiles/index.html");

const server = http.createServer((req, res) => {
	// console.log(req.method);
	// console.log(req.url);
	// redirect users to requested resource
	const url = req.url;
	if (url === "/") {
		// res.writeHead(200, { "content-type": "text/html" });
		// res.write("<h1>Home Page</h1>");
		// res.end();

		// we could get real html pages
		res.writeHead(200, { "content-type": "text/html" });
		res.write(homePage);
		res.end();
	} else if (url === "/about") {
		res.writeHead(200, { "content-type": "text/html" });
		res.write("<h1>About Page</h1>");
		res.end();
	} else if (url === "/contact") {
		res.writeHead(200, { "content-type": "text/html" });
		res.write("<h1>Contact Page</h1>");
		res.end();
	} else {
		res.writeHead(404, { "content-type": "text/html" });
		res.write("<h1>the resource you seek does not exist</h1>");
		res.end();
	}
	// console.log("user hit server");
	// we have to provide more info to the browser about what we are sending back by adding the res.writeHead() to provide headers(the metadata about our response). first we provide status code(for now, we'll use 200), then we'll pass in the headers. the most common header is the Content-type - here we tell the browser what type of file we are sending back(in this case, html)
	// res.writeHead(200, { "content-type": "text/html" });

	// if we return it as 'plain' text, it will return what we passed in the content-type to plain text(which is a type of file).
	// res.writeHead(200, { "content-type": "text/plain" });

	//  - res.end() must be called on each response to signify that the communication is over.
	// res.end("<h1>Home Page</h1>");
	// or
	// res.write("<h1>Home Page</h1>");
	// res.end();
});

server.listen(5000);
