//Create an HTTP server on port 3000 with a request handler that creates a file named hello-world.txt. 
const http = require('http');
const port = 3000;
const fs = require('fs');

// Handles HTTP requests.
//You will be using the fs module to do this. Write the content: "Hello to this great world" to the hello-world.txt file. 
const requestHandler = (request, response) => {
    fs.writeFile('hello-world.txt', 'Hello to this great world!', err => {
        if (err) throw err;
        console.log('saved');
    });
};

// Create a server and pass in the requestHandler function
const server = http.createServer(requestHandler);

// Start the server listening on port 3000
server.listen(port, (err) => {
    if (err) {
        return console.log(`You have an error:  ${err}`);
    }

    console.log(`server is listening on ${port}`);
});