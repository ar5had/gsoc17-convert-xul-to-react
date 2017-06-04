const express = require("express");
const path = require("path");
const app = express();
const serverType = process.argv[2];

if(serverType){
  app.use(express.static(path.join(__dirname, 'dist')));
} else {
  app.use(express.static(path.join(__dirname, 'src')));  
}

app.get('/', (req, res)=>{
  const markup = 
  `<style>
      html {
        font-family: 'Roboto', sans-serif;
        letter-spacing: 2px;
        word-spacing: 7px;
        height: 100%;
      }

      body {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0;
        min-height: 100%;
        flex-direction: column;
      }

      h5 {
        font-size: 14px;
        text-align:center;
        padding: 10px 15px;
        text-transform: uppercase;
        margin: 10px 0;
      }

      h5>a {
        transition: opacity .2s;
        text-decoration: none;
        color: #222;
      }

      h5>a:hover {
        opacity: .75;
        cursor: pointer;
      }
    </style>
    <h5>
      <a href="/calendar-properties-dialog">
        calendar properties dialog
      </a>
    </h5>
  `;
  res.type("text/html");
  res.send(markup);
});

app.get('/scripts/:name', (req, res)=>{
  const filePath = path.join(__dirname, 'scripts', req.params.name);
  
  res.type("application/javascript;");
  res.sendFile(filePath);
});

const port = process.env.PORT || 8080;
app.listen(port,  function () {
  if(serverType) {
    console.log(`${serverType} server started on port ${port}!`);
  } else {
    console.log(`Server started via gulp!`);
  }
});