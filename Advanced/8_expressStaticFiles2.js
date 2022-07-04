const express = require("express");
// to send in pages/files (e.g, html), we make use of the path module from node and the sendfile method from express and provide it with the absolute path
const path = require("path");
const app = express();

// setup static and middleware
app.use(express.static("../../Advanced/navbar-app/public"));
// static asset refers to files that server doesn't have to change, files such as images, stylesheets, javascript etc. express sets up the file type and all other set up such as path, status code.....we could also add our index file to our static folder. this makes index.html a root so that whenever a user hits the server, the server will serve the html file. we also have SSR(server side rendering)
// app.get("/", (req, res) => {
// 	res.sendFile(path.resolve(__dirname, "../../Advanced/navbar-app/index.html"));
// });

app.all("*", (req, res) => {
	res.status(404).send("<h1>Not Found</h1>");
});

app.listen(5000, () => {
	console.log("listening on port 5000");
});
