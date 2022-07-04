// HTTP module: server side module. here we see core features of node.

// this module allows us to set up a web server. later, we'll be creating our own server and creating our own API. we will be using an abstraction on top of the http module and it is a package called EXPRESS.

// 1. we get the http method,
// 2. we set up the server which takes a callback function with 2 parameters, request(a user makes a request) and response(the response is returned)
// 3. we have to then set up a port for our server to listen on,
// 4. we need to remember that everytime we make a change, we have to stop the server and restart it by running "node filename"
const http = require("http");

// const server = http.createServer((request, response) => {
// 	console.log(request);
// 	response.write("welcome to the homepage");
// 	response.end();
// });

// server.listen(5000);

// we can wrap the content of the response.write() inside the response.end(). below we want to check for the url property
const server = http.createServer((request, response) => {
	if (request.url === "/") {
		response.end("welcome to the homepage");
	}

	if (request.url === "/about") {
		response.end("This page tells you about us");
	}

	if (request.url === "/contact") {
		response.end("This page helps you speak to us");
	}

	// this point, to give a page when the page requested doesn't exist.
	response.end(
		`<h1>Check Back Later</h1>
        <p>Doesn't Currently Exist</p>
        <a href="/">Back Home</a>`
	);
});

server.listen(5000);
