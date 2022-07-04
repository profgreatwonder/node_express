// streams are used to read or write sequentially. when we have to handle and manipulate streaming data, for e.g, continuous source or a big file, streams come in real handy. In node, there are 4 different types of stream, Writable(used to write data sequentially), Readable(used to read data sequentially), Duplex(used to both read and write data sequentially), Transform(data can be modified when reading or writing). Just like with events, many built-in modules in node implement streaming interface. streams extends events emmiter class which means that we can use events like data and end on streams.

// const { writeFileSync } = require("fs");
// for (let i = 0; i < 10000; i++) {
// 	writeFileSync("./content/big.txt", `hello world ${i}\n`, { flag: "a" });
// }

// better method

const { createReadStream } = require("fs");

// const stream = createReadStream("./content/big.txt");

// default 64kb
// last buffer - remainder
// highWaterMark - control size the size of the buffer
// const stream = createReadStream('./content/big.txt', {highWaterMark: 90000})
// const stream = createReadStream('../content/big.txt', {encoding: 'utf8'})

// to control the size of the buffer
const stream = createReadStream("../content/big.txt", {
	highWaterMark: 90000,
	encoding: "utf8",
});

stream.on("data", (result) => {
	console.log(result);
});

// the error event
stream.on("error", (err) => {
	console.log(err);
});
