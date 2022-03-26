const express = require("express");
const path = require("path");

const server = express();

// server.use("/about", (request, response) => {
//   let aboutpath = path.join(__dirname, "public", "about.html");
//   response.sendFile(aboutpath);
// });

// server.use("/", (request, response) => {
//   let homepath = path.join(__dirname, "public", "index.html");
//   response.sendFile(homepath);
// });

// server.use(express.static(__dirname + "/public"));

const handleHomeGetRequest = (request, response) => {
  response.json([
    {
      userId: 1,
      id: 1,
      title:
        "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
    },
  ]);
};

const handleHomePostRequest = (request, response) => {
  console.log("Home post request");
};

server.get("/", handleHomeGetRequest);
server.post("/", handleHomePostRequest);

server.listen(9000, () => {
  console.log("Server is running on port 9000");
});
