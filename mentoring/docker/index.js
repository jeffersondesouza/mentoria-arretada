const express = require("express");
let app = express();
const port = process.env.port;

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.listen(port, function () {
  console.log("http://localhost:" + port);
});
