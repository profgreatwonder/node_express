// Modules - Encapsulated Code (only share minimum)
// CommonJS - by default, every file is a module

const names = require("./4_names"); // error
// solution
const { james, sola } = require("./4_names");
// or
// sayHi(names.james);
// sayHi(names.sola);

const sayHi = require("./5_utils");
// console.log(names);

const data = require("./6_alternative_exp_imp");
// console.log(data);

require("./7_interesting");

sayHi("susan");
sayHi(james);
sayHi(sola);
