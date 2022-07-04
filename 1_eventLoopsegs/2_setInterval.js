setInterval(() => {
	console.log("hello world");
}, 2000);
console.log("i will run first");
// process stays alive unless the process is killed (CTRL + C) or an unexpected error occurs
// setIntervals works differently because the code is to run everytime within the interval set, so our code never actually stop running. In setInterval, within the time provided in the callback function, the callback function will run. that is why we don't exit the code
