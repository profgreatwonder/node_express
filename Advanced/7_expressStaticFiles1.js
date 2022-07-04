const express = require("express");
// to send in pages/files (e.g, html), we make use of the path module from node and the sendfile method from express and provide it with the absolute path
const path = require("path");
const app = express();

// setup static and middleware
app.use(express.static("./navbar-app/public"));
// static asset refers to files that server doesn't have to change, files such as images, stylesheets, javascript etc. express sets up the file type and all other set up such as path, status code.....
app.get("/", (req, res) => {
	res.sendFile(path.resolve(__dirname, "./navbar-app/index.html"));
});

app.all("*", (req, res) => {
	res.status(404).send("<h1>Not Found</h1>");
});

app.listen(5000, () => {
	console.log("listening on port 5000");
});
