const authorize = (req, res, next) => {
	// here we want to check if the user provides a query string in the url, then we send back the resource that the user is requesting, however, if the user does not provide the user query, then we send back a 401, which stands for 'unauthorized'.
	const { user } = req.query;
	// we are looking for the user parameter and if the user exists,
	if (user === "john") {
		req.user = { name: "john", id: 3 };
		next();
	} else {
		res.status(401).send("unauthorized");
	}
	// console.log("authorize");
	// next();
};

module.exports = authorize;
