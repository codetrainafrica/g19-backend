const express = require("express");
const res = require("express/lib/response");
const path = require("path");

const server = express();

// const handleHomeRequest = (request, response) => {
//   let homePath = express.static(
//     path.join(__dirname, "public", "pages", "home.html")
//   );
//   response.sendFile(homePath);
// };

// const handleAboutRoute = (request, response) => {
//   const aboutPath = path.join(__dirname, "public", "pages", "about.html");
//   response.sendFile(aboutPath);
// };

// server.use("/about", handleAboutRoute);
// server.use("/", handleHomeRequest);

const handleGamesRoute = (request, response) => {
  response.json([
    "COD",
    "GTA V",
    "FIFA 14",
    "God Of War",
    "Resident Evil",
    "Candy Crush",
  ]);
};

server.get("/games", handleGamesRoute);

server.listen(5003, () => {
  console.log("server running on port 5003");
});
