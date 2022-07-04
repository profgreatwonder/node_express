const logger = (req, res, next) => {
	const method = req.method;
	const url = req.url;
	const time = new Date().getFullYear();
	console.log(method, url, time);
	// res.send("testing");
	// if we want to pass it onto the logger to the next function which in our case is app.get, we have to invoke next
	next();
	// it is important to remember that either you terminate with res.send() or you send it onto the next function by using next().
};

module.exports = logger;
