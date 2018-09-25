/**
 *  NuEats read from json and display in index.html
 */


//  Load external json
function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
      let jsonObj = JSON.parse(this.responseText);
      render(jsonObj);
    }
  };
  xhttp.open("GET", "data.json", true);
  xhttp.send();
}


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

    location.appendChild(nameTxt);
    when.appendChild(dateTxt);
    
    dataFragment.appendChild(location);
    dataFragment.appendChild(when);
  });

  dataView.appendChild(dataFragment);
}

loadDoc();
