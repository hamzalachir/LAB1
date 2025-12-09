// A simple HTTP server for our container lab

const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello! Your containerized application works successfully in the cloud.");
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});
