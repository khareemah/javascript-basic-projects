import fetchDrinks from "./src/fetchDrinks.js";
import displayDrinks from "./src/displayDrinks.js";

const api = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a";
async function start() {
  const data = await fetchDrinks(api);
  const drinks = data.drinks;
  displayDrinks(drinks);
}
start();
