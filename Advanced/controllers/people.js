let { people } = require("../../node-express-course/02-express-tutorial");

const getPeople = (req, res) => {
	res.status(200).json({ success: true, data: people });
};

const createPerson = (req, res) => {
	const { name } = req.body;
	if (!name) {
		return res
			.status(400)
			.json({ success: false, msg: "please enter your name" });
	}
	res.status(201).send({ success: true, person: name });
};

const createPersonPostman = (req, res) => {
	const { name } = req.body;
	if (!name) {
		return res
			.status(400)
			.json({ success: false, msg: "please enter your name" });
	}
	res.status(201).send({ success: true, data: [...people, name] });
};

const updatePerson = (req, res) => {
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
};

const deletePerson = (req, res) => {
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
};

module.exports = {
	getPeople,
	createPerson,
	createPersonPostman,
	updatePerson,
	deletePerson,
};
