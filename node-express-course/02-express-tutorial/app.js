const express = require("express");
const app = express();
const people = require("../../Advanced/routes/people");
const auth = require("../../Advanced/routes/auth");

// static assets
app.use(express.static("./methods-public"));
// in order to have access to the form data, we need to add the middleware. we need to go with url and middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/api/people", people);
app.use("/login", auth);

app.listen(5000, () => {
	console.log("we are listening");
});
