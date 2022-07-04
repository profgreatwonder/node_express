// GET - Read Data
// POST - Insert Data
// PUT - Update Data
// DELETE - Delete Data

// when you want to add a resource to the server, you are expected to provide the data and that data is called PAYLOAD.

// structure of REQUEST message
// 1. Start Line
// 2. The Headers (the info about our message)
// 3. then the blank like which shows that we are done with the meta information and optional body which we will use from time to time

// structure of RESPONSE message
// most of it will have been done for us but some part, we will have to do manually
// 1. the start line will have the http version which will most likely be 1.1, then we have a status code. this signals the result of the request which we will be sending back and finally, the status text
// 2. the header where we provide info about our response message. this part is mostly a setup of key:value pairs. we have the Content-Type: text/html(where we are sending back the html) and Content-Type: text/html(this option is sending back the data, could be .json[incase of querying an API] or other type of data).
