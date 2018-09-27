/**
 *  NuEats read from json and display in index.html
 */

let jsonObj = require("./data.json");


// Render data on html
function render(jsonObj) {
  let dataView = document.getElementById("js_json-content"),
      dataFragment = document.createDocumentFragment(),
      data = jsonObj;

  // Loop through array of objects
  jsonObj.forEach(function (item) {
    let place = item.Restaurant,
        date = item.Date,
        location = document.createElement("h2"),
        when = document.createElement("p"),
        nameTxt = document.createTextNode(place);
        dateTxt = document.createTextNode(date);

    // Attach content to HTML elements
    location.appendChild(nameTxt);
    when.appendChild(dateTxt);
    
    // Attach dataFragment container to DOM
    dataFragment.appendChild(location);
    dataFragment.appendChild(when);
  });

  // Attach render output to HTML
  dataView.appendChild(dataFragment);
}

render(jsonObj);
