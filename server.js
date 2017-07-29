const express = require("express");
const path = require("path");
const app = express();
const serverType = process.argv[2];

if (serverType) {
  app.use(express.static(path.join(__dirname, "dist")));
} else {
  app.use(express.static(path.join(__dirname, "src")));
}

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "src", "index.html"));
});

app.get("/scripts/:name", (req, res) => {
  const filePath = path.join(__dirname, "scripts", req.params.name);

  res.type("application/javascript;");
  res.sendFile(filePath);
});

const port = process.env.PORT || 9000;
app.listen(port, function() {
  if (serverType) {
    console.log(`${serverType} server started on port ${port}!`);
  } else {
    console.log(`Server started via gulp!`);
  }
});
