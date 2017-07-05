var disqus_config = function () {
this.page.url = window.location.toString().replace(".html", "");
this.page.identifier = window.location.pathname.slice(1).replace(".html","");
};

(function() { 
var d = document, s = d.createElement("script");
s.src = "https://convert-xul-to-html.disqus.com/embed.js";
s.setAttribute("data-timestamp", +new Date());
(d.head || d.body).appendChild(s);
})();