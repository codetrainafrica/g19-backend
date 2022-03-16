const express = require("express");

const server = express();

const handleHomeRequest = (request, response) => {
  console.log(request);
  response.send("<h1>Hello</h1>");
};

server.use("/", handleHomeRequest);

server.listen(5003, () => {
  console.log("server running on port 5003");
});
