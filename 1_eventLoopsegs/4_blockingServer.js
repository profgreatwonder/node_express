const http = require("http");

const server = http.createServer((req, resp) => {
	if (req.url === "/") {
		resp.end("Home Page");
	} else if (req.url === "/about") {
		// blocking code
		for (let i = 0; i < 1000; i++) {
			for (let j = 0; j < 1000; j++) {
				console.log(`${i}, ${j}`);
			}
		}
		// because this is loading, other users can't use any of the resources (homepage or error page). this is why it is important to set up our code asynchronously. when we do this, such code is offloaded and invoked only when it is ready/when the data is back.
		resp.end("About Us Page");
	}

	resp.end("error");
});

server.listen(5000, () => {
	console.log("server is listenting on port 5000");
});
