import { showLoading } from "./toggleLoading.js";

async function fetchDrinks(api) {
  showLoading();
  try {
    const response = await fetch(api);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
export default fetchDrinks;
