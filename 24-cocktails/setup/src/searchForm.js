import displayDrinks from "./displayDrinks.js";
import fetchDrinks from "./fetchDrinks.js";
import getElement from "./getElement.js";

const form = getElement(".search-form");
const input = getElement("input[name=drink]");
const baseApi = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
form.addEventListener("keyup", async function (e) {
  const value = input.value;
  if (!value) return;
  const data = await fetchDrinks(`${baseApi}${value}`);
  displayDrinks(data);
});
