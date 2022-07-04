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

// const express = require("express");
// const app = express();
// // we want to access the data stored in the data.js file
// const { products } = require("./data");
// app.get("/", (req, res) => {
// 	res.send('<a href="/api/products>Products</a>');
// });

// // the code above will throw an error 404 message. to solve it, we have to set up a get request for the resource.
// // app.get("/api/products", (req, res) => {
// // 	const newProducts = products.map((product) => {
// // 		const { id, name, image } = product;
// // 		return { id, name, image };
// // 	});
// // 	// we want to send back the product
// // 	res.json(products);
// // });

// app.listen(5000, () => {
// 	console.log("we clicked");
// });

const express = require("express");
const app = express();
const { products } = require("./data");
// console.log(products);

// app.get("/", (req, res) => {
// 	res.json(products);
// });
app.get("/", (req, res) => {
	res.send('<h1>Home Page</h1><a href="/api/products">Products</a>');
});

app.get("/api/products", (req, res) => {
	const newProducts = products.map((product) => {
		const { id, name, image } = product;
		return { id, name, image };
	});
	res.json(newProducts);
});

// route parameter
// app.get("/api/products/1", (req, res) => {
// 	const singleProduct = products.find((product) => {
// 		product.id === 1;
// 	});
// 	res.json(singleProduct);
// });

// the method above is not very efficient, so below is a better way. we use the route parameter in express
// app.get("/api/products/:productID", (req, res) => {
// 	// console.log(req);
// 	// console.log(req.params);
// 	const singleProduct = products.find((product) => product.id === 1);
// 	res.json(singleProduct);
// });

// in the code above, we are manually checking the route parameters. below is the code to do it dynamically.
app.get("/api/products/:productID", (req, res) => {
	// console.log(req);
	// console.log(req.params);
	const { productID } = req.params;
	const singleProduct = products.find(
		(product) => product.id === Number(productID)
	);
	// if the product doesn't exist
	if (!singleProduct) {
		return res.status(404).send("<h1>Product not found</h1>");
	}
	res.json(singleProduct);
});

app.get("/api/products/:productID/review/:reviewID", (req, res) => {
	console.log(req.params);
	res.send("hello world");
});

// app.all("*", (req, res) => {
// 	res.status(404).send("<h1>Not Found</h1>");
// });

// queryString Parameters aka URL parameters: helps us to send small amounts of information to the server using the URL. This is usually used as parameters to query a database or filter results. this is depenedent on the people who are setting up the server, they decide what parameters that is going to be accepted and what functionality will depend on those values

// app.get("/api/v1/query", (req, res) => {
// 	console.log(req.query);
// 	res.send("hello world");
// });
// to test the code above, we type in the browser, we type: localhost:5000/api/v1/query?name=john&id=4

// we have the code below to limit the search done by users. we can test in the browser: localhost:5000/api/v1/query?search=a&limit=2
app.get("/api/v1/query", (req, res) => {
	// console.log(req.query);
	const { search, limit } = req.query;
	let sortedProducts = [...products];

	// now we want to check if the check is present in the queryString parameters, then we will want to filter the products.
	if (search) {
		sortedProducts = sortedProducts.filter((product) => {
			return product.name.startsWith(search);
		});
	}

	// we want to check for the limit (if the user provides it)
	if (limit) {
		sortedProducts = sortedProducts.slice(0, Number(limit));
	}
	// if the request was successful but there is no result to be returned
	if (sortedProducts.length < 1) {
		// res.status(200).send("no products matched your search");
		// if we don't add the return, we get the error: Cannot set headers after they are sent to the client. this is because we can only have one response per request.
		return res.status(200).send("no products matched your search");
		// or
		// return res.status(200).json({ success: true, data: [] });
	}
	res.status(200).json(sortedProducts);
	res.send("hello world");
});

app.listen(5000, () => {
	console.log("we are listening");
});
