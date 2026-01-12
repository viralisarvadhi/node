const { createServer } = require('node:http');
//using no built in node http module to create server which listen http and send http 

const hostname = '127.0.0.1'; //setting the server address to the localhost
const port = 3000; //the specific port number the server listning on basicaly for node it is 3000

const server = createServer((req, res) => { //creating the http server
  res.statusCode = 200; //status code for request succsesfull
  res.setHeader('Content-Type', 'text/plain'); //tells the browser kind of data
  res.end('Hello World'); //send response to the clinet and the cycle
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
}); //starting the server
