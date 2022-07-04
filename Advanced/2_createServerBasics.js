const http = require("http");

const server = http.createServer((req, res) => {
	// console.log(req.method);
	console.log(req.url);
	// console.log("user hit server");
	// we have to provide more info to the browser about what we are sending back by adding the res.writeHead() to provide headers(the metadata about our response). first we provide status code(for now, we'll use 200), then we'll pass in the headers. the most common header is the Content-type - here we tell the browser what type of file we are sending back(in this case, html)
	res.writeHead(200, { "content-type": "text/html" });

	// if we return it as 'plain' text, it will return what we passed in the content-type to plain text(which is a type of file).
	// res.writeHead(200, { "content-type": "text/plain" });

	//  - res.end() must be called on each response to signify that the communication is over.
	// res.end("<h1>Home Page</h1>");
	// or
	res.write("<h1>Home Page</h1>");
	res.end();
});

server.listen(5000);
