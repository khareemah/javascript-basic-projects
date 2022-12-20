import fetchDrinks from "./fetchDrinks.js";
import displayDrinks from "./displayDrinks.js";
import setDrink from "./setDrink.js";
async function presentDrinks(api) {
  const data = await fetchDrinks(api);
  const section = displayDrinks(data);
  if (section) {
    setDrink(section);
  }
}

export default presentDrinks;
