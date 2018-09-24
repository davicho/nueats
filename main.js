/**
 *  NuEats read from json and display in index.html
 */


//  Load external json
function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
      console.log("[json file loaded successfully]");

      let jsonObj = JSON.parse(this.responseText);
      render(jsonObj);
    }
  };
  xhttp.open("GET", "data.json", true);
  xhttp.send();
}


// Render data on html
function render(jsonObj) {
  console.log("[rendering]");

  let location = document.createElement("h2");
  let nameTxt = document.createTextNode("test");
  let dataDisplay = document.getElementById("js_json-content");
  let data = jsonObj;

  location.appendChild(nameTxt);
  dataDisplay.appendChild(location);

  jsonObj.forEach(function (element, index ) {
    nameTxt = element.Restaurant;
    console.log(nameTxt);

    //location.appendChild(nameTxt);
    //dataDisplay.appendChild(location);
    //dataDisplay.innerHTML = "<h2>" + element.Restaurant + "</h2>";
    //console.log(index + ": " + element.Restaurant);
  });

}

loadDoc();
