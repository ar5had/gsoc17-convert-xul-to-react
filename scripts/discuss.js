const defaultOrigins = ["http://localhost:8000", "http://localhost:9000"];
let origin = window.location.origin;

if (defaultOrigins.includes(origin)) {
  origin = "https://gsoc17-convert-xul-to-html.herokuapp.com";
}

const path = window.location.pathname.replace(".html", "");
console.log(origin + path, path.slice(1));
var disqus_config = function() {
  this.page.url = origin + path;
  this.page.identifier = path.slice(1);
};

(function() {
  var d = document,
    s = d.createElement("script");
  s.src = "https://convert-xul-to-html.disqus.com/embed.js";
  s.setAttribute("data-timestamp", +new Date());
  (d.head || d.body).appendChild(s);
})();
