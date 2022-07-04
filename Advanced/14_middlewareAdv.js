// express middleware are functions that execute during the request to the server. Each middleware function has access to the request and response objects. middleware are everywhere in express, it is safe to say that express app are a bunch of middleware functions used together to make an express app. it is at the heart and soul of express. it ususally sits between the request and the response,
// req => middleware => res

const express = require("express");
const app = express();
const logger = require("../../logger");
const authorize = require("../../authorize");
// app.use(logger);
// app.use("/api", logger);
app.use([logger, authorize]);
// we can add path as an argument to the use method app.use(). when the '/api' path is applied, it going to apply to any route after the path. the middleware function is executed when the base of the request path matches. so the '/api' is our base and whatever comes after it will still invoke the middleware function. if the path is ommitted, the middleware is going to be apllied to all of our request.

// app.use(logger);
// In this example, we'll have to routes, the home route and the about routes. in these routes, we want to get the methods that the user is using, the URL that user is trying to access, and the date.

// it will make a lot of sense to have a way to add the logger function to any route instead of manually adding it. we can create a new file and add our logger to it and then export it in order to require it in the file where we need it. instead of passing logger everytime, we can use app.use() method. this should be placed at the top of the document. since express works in order, it has to be at the top. if it is beneath a route, it won't function for that route.

// app.get("/", (req, res) => {
// 	const method = req.method;
// 	const url = req.url;
// 	const time = new Date().getFullYear();
// 	console.log(method, url, time);
// 	res.send("Home");
// });

// const logger = (req, res, next) => {
// 	const method = req.method;
// 	const url = req.url;
// 	const time = new Date().getFullYear();
// 	console.log(method, url, time);
// 	// res.send("testing");
// 	// if we want to pass it onto the logger to the next function which in our case is app.get, we have to invoke next
// 	next();
// 	// it is important to remember that either you terminate with res.send() or you send it onto the next function by using next().
// };

app.get("/", (req, res) => {
	// const method = req.method;
	// const url = req.url;
	// const time = new Date().getFullYear();
	// // what if we wanted the above list of links on all our routes? we can't copy and paste them in each route... a better solution will be to put them in a function and pass it between the route and the (req,res). when we work with middlewares, we must pass it to the next middleware unless you are terminating the whole cycle by sending back the response.
	// console.log(method, url, time);
	res.send("Home");
});

app.get("/about", (req, res) => {
	res.send("About");
});
app.get("/api/products", (req, res) => {
	res.send("Products");
});
app.get("/api.items", (req, res) => {
	res.send("Items");
});

app.listen(5000, () => {
	console.log("we are listening");
});
