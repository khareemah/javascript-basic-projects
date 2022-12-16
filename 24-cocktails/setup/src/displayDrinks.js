import getElement from "./getElement.js";
const sectionCenter = getElement(".section-center");
function displayDrinks(drinks) {
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
}

export default displayDrinks;
