function assert(value, text) {
  var li = document.createElement("li");
  li.className = value ? "pass" : "fail";
  li.appendChild(document.createTextNode(text));
  var results = document.getElementById("results");
  if (!results) {
    results = document.createElement("ul");
    results.setAttribute('id','results');
    document.body.appendChild(results);
  }
  results.appendChild(li);
}
