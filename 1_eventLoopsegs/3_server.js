const http = require("http");

const server = http.createServer((req, resp) => {
	console.log("request event");
	resp.end("Hello world");
});

server.listen(5000, () => {
	console.log("Server is listening on port: 5000...");
});

// the code keeps running because listen is asynchronous. event loop is waiting for the requests to come in before we run our callback and respond appropraitely
