/**
 *  NuEats read from json and display in index.html
 */

const jsonObj = require("./data.json"),
    data = jsonObj,
    results = document.getElementById("results");

class Establishment {
  constructor () {
    this.data = data;
    this.results = results;
  }

  render () {
    // Render data on html
    let markup = `
      <div class="places">
        ${data.map(place => 
          `<dl>
            <dt>Location: ${place.Restaurant}</dt>
            <dd><b>Type: ${place.Cuisine}</b></dd>
            <dd>${place.Date}</dd>
          </dl>`
        ).join('')}
      </div>
    `;

    return results.innerHTML = markup;
  }
}

let restaurant = new Establishment;
console.log(restaurant.render());