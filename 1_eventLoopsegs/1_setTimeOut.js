// started OS process
console.log("first");
setTimeout(() => {
	console.log("second");
}, 0);
console.log("third");
// completed and exited OS process

// second runs last because it gets offloaded
// this works within a specified time and all tasks are completed but setIntervals works differently because the code is to run everytime within the interval set, so our code never actually stop running. In setInterval, within the time provided in the callback function, the callback function will run. that is why we don't exit the code
