/**
 *  NuEats read from json and display in index.html
 */

let jsonObj = require("./data.json"),
    data = jsonObj,
    results = document.getElementById("results");

// Render data on html
const markup = `
  <div class="places">
    ${data.map(place => 
      `<dl>
        <dt>${place.Restaurant}</dt>
        <dd><b>${place['Cuisine Type']}</b></dd>
        <dd>${place.Date}</dd>
      </dl>`
    ).join('')}
  </div>
`;

results.innerHTML = markup;