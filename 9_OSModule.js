// OS MODULE
const os = require("os");
// or
// const {destructure the module properties that we want} = require('os');

// info about the current user
const user = os.userInfo();
console.log(user);

// info about how long the computer has been running
console.log(`The system uptime is ${os.uptime()} seconds`);

const osDetails = {
	name: os.type(),
	release: os.release(),
	totalMemory: os.totalmem(),
	freeMemory: os.freemem(),
};

console.log(osDetails);
