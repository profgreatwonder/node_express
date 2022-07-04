const express = require("express");
const app = express();
let { people } = require("./data");

// static assets
app.use(express.static("./methods-public"));
// in order to have access to the form data, we need to add the middleware. we need to go with url and middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.get("/api/people", (req, res) => {
	res.status(200).json({ success: true, data: people });
});

app.post("/api/people", (req, res) => {
	const { name } = req.body;
	if (!name) {
		return res
			.status(400)
			.json({ success: false, msg: "please enter your name" });
	}
	res.status(201).send({ success: true, person: name });
});

app.post("/api/postman/people", (req, res) => {
	const { name } = req.body;
	if (!name) {
		return res
			.status(400)
			.json({ success: false, msg: "please enter your name" });
	}
	res.status(201).send({ success: true, data: [...people, name] });
});
app.post("/login", (req, res) => {
	// console.log(req.body);
	const { name } = req.body;
	if (name) {
		return res.status(200).send(`Welcome ${name}`);
	}
	res.status(401).send("Please provide credentials");
});

app.put("/api/people/:id", (req, res) => {
	const { id } = req.params;
	const { name } = req.body;
	// console.log(id, name);
	// res.send("hello world"
	const person = people.find((person) => person.id === Number(id));
	if (!name) {
		return res
			.status(404)
			.json({ success: false, msg: `nobody with the id of ${id}` });
	}

	const newPeople = people.map((person) => {
		if (person.id === Number(id)) {
			person.name = name;
		}
		return person;
	});
	res.status(200).json({ success: true, data: newPeople });
});

// only get and delete method is working in postman. use it to crosscheck others (post and put)
app.delete("/api/people/:id", (req, res) => {
	const person = people.find((person) => person.id === Number(req.params.id));
	if (!person) {
		return res.status(404).json({
			success: false,
			msg: `nobody with the id of ${req.params.id}`,
		});
	}
	const newPeople = people.filter(
		(person) => person.id !== Number(req.params.id)
	);
	return res.status(200).json({ success: true, data: newPeople });
});
app.listen(5000, () => {
	console.log("we are listening");
});
