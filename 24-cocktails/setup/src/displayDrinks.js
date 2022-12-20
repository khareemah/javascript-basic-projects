import { hideLoading } from "./toggleLoading.js";
import getElement from "./getElement.js";

const sectionCenter = getElement(".section-center");
const title = getElement(".title");
function displayDrinks({ drinks }) {
  if (drinks) {
    const drinksList = drinks
      .map((drink) => {
        const { idDrink: id, strDrink: name, strDrinkThumb: image } = drink;
        return `<a href="drink.html">
          <article class="cocktail" data-id="${id}">
            <img src="${image}" alt="${name}" />
            <h3>${name}</h3>
          </article>
        </a>`;
      })
      .join("");
    sectionCenter.innerHTML = drinksList;
    title.innerHTML = "";
  } else {
    sectionCenter.innerHTML = null;
    title.innerHTML = "no element matched your search";
  }
  hideLoading();
  return sectionCenter;
}

export default displayDrinks;
