import presentDrinks from "./src/presentDrinks.js";

const api = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a";
window.addEventListener("DOMContentLoaded", function () {
  presentDrinks(api);
});
