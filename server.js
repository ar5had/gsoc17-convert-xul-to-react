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
  const markup = `<style>
      html {
        font: message-box;
        letter-spacing: 2px;
        word-spacing: 7px;
        height: 100%;
        color: -moz-DialogText;
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
        transition: opacity .1s;
        text-decoration: none;
        color: -moz-DialogText;
      }

      h5>a:hover, button:hover {
        opacity: .75;
        cursor: pointer;
      }

      .iframe-btn-wrapper {
        padding-top: 35px;
        border-top: solid 1px #bbb;
        width: 80%;
        max-width: 500px;
        margin-top: 25px;
      }

      button {
        padding: 10px;
      }

      .sl:after {
        content: attr(data-status);
        border: solid 1px;
        border-radius: 5px;
        font-size: 10px;      
        white-space: nowrap;
        padding: 2px 5px;
        color: #999;
        font-weight: 400;
      }

    </style>
    <!-- <h5>
      <a class="sl" href="/pages/react-dialog" data-status="done">
        React Dialog Element   
      </a>
    </h5> -->
    <h5>
      <a class="sl" href="/pages/calendar-properties-dialog" data-status="done">
        calendar properties dialog
      </a>
    </h5>
    <h5>
      <a class="sl" href="/pages/print-dialog"  data-status="ui done">
        Print Dialog   
      </a>
    </h5>
    <h5>
      <a class="sl" href="/pages/calendar-alarm-dialog" data-status="ui done">
        Calendar Alarm Dialog   
      </a>
    </h5>
    <!-- <h5>
      <a class="sl" href="/pages/event-dialog" data-status="in progress">
        Event Dialog   
      </a>
    </h5>
    <h5>
      <a class="sl" href="/pages/task-dialog" data-status="in progress">
        Task Dialog   
      </a>
    </h5> -->
    <h5 class="iframe-btn-wrapper">
      <a href="/pages/iframe-testing-ground">
        <button>
          iframe testing ground
        </button>
      </a>
    </h5>
  `;

  res.type("text/html");
  res.send(markup);
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
