const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, 'src')));

app.get('/', (req, res)=>{
  res.send('Hello World!');
});

app.get('/scripts/:name', (req, res)=>{
  const filePath = path.join(__dirname, 'scripts', req.params.name);
  
  res.type("application/javascript;");
  res.sendFile(filePath);
});

const port = process.env.PORT || 8080;
app.listen(port,  function () {
	console.log(`Server started!`);
});