const express = require("express");
const router = express.Router();
const {
	getPeople,
	createPerson,
	createPersonPostman,
	updatePerson,
	deletePerson,
} = require("../controllers/people");

// router.get("/", getPeople);

// router.post("/", createPerson);

// router.post("/postman", createPersonPostman);

// router.put("/:id", updatePerson);

// // only get and delete method is working in postman. use it to crosscheck others (post and put)
// router.delete("/:id", deletePerson);

// or

router.route("/").get(getPeople).post(createPerson);

router.route("/postman").post(createPersonPostman);

router.route("/:id").put(updatePerson);

router.route("/:id").delete(deletePerson);

module.exports = router;
