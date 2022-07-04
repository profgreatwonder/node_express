// EVENTS
// event driven programming is a style determined by the events that occur when the program executes.
// events work in such a way that we listen for a specific event, and register functions that will execute in response to those events. once our events takes place, callback function fires. events are a core part of node

const EventEmmitter = require("events");

// the EventEmmitter is a class. if you want to create something custom, you will need to extend the class. if you simply want to emit an event, as well as listen for it, you can just create the instance of our class(EventEmmitter). what we want is:
// on - listen for an event,
// emit - emit that event

// the second method
const customEmmiter = new EventEmmitter();

customEmmiter.on("response", (name, id) => {
	console.log(`data received for ${name} with the id:${id}`);
});

// we can emit our event and have many functions listen for that event and do something with it.
customEmmiter.on("response", () => {
	console.log(`do something else here`);
});

// order matters. the events will only execute in sequence. you can listen for an event after it has been emmitted, in order words, the emit method has to come last

// we can pass the arguments when we are emmitting the events and then back where we are listening for an event, we pass in the parameters
// customEmmiter.emit("response");
customEmmiter.emit("response", "John", 34);
