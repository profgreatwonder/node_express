// when it comes to express, in most cases, we use either of 2 options, we can use it to set up API or templates with server side rendering.

//a. in express or http case, API means setting up an http interface to interact with our data. data is sent using json. in order to send back response, we use res.json() method, which will do all the heavy-lifting such as setting up the proper content type and stringify our data. to further explain the API method, our server provides data - this means that any frontend app that wants to access it and use it, can simply perform an http request and using our data, will set up the API and functionality

//b. The other method is SSR where we will set up template and send back entire HTML, CSS, and JS files ourselves. We achieve this using the res.render() method.
// API vs SSR
// 1. API - JSON
//      - Send Data
//      - res.json()
// 2. SSR - Template
//      - Send Template
//      - res.render

const express = require("express");
const app = express();

app.get("/", (req, res) => {
	res.json([{ name: "john" }, { name: "Peter" }]);
});

app.listen(5000, () => {
	console.log("we clicked");
});
