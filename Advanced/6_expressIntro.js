// list of methods in express
// 1. app.get
// 2. app.post
// 3. app.put
// 4. app.delete
// 5. app.all - works with get, post, put and delete
// 6. app.use - responsible for middleware
// 7. app.listen

const express = require("express");

const app = express();

app.get("/", (req, res) => {
	console.log("user checked this out");
	res.status(200).send("Home Page");
});

app.get("/about", (req, res) => {
	console.log("user checked aboutus");
	res.status(200).send("about page");
});

// error message
app.all("*", (req, res) => {
	res.status(404).send("<h1>Not found</h1>");
});

app.listen(5000, () => {
	console.log("server is listening on port 5000");
});
