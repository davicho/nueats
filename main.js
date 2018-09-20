/**
 *  NuEats read from json and display in index.html
 */

console.log("in main.js");

function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     document.getElementById("data").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "data.json", true);
  xhttp.send();
}

loadDoc();