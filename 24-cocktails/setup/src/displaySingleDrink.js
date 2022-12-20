import { hideLoading } from "./toggleLoading.js";
import getElement from "./getElement.js";

const drinkImg = getElement(".drink-img");
const drinkDesc = getElement(".drink-desc");
const drinkName = getElement(".drink-name");
const drinkIngredients = getElement(".drink-ingredients");

const displayDrink = (data) => {
  hideLoading();
  const singleDrink = data.drinks[0];

  const {
    strDrink: name,
    strInstructions: desc,
    strDrinkThumb: img,
  } = singleDrink;

  drinkImg.src = img;
  drinkDesc.textContent = desc;
  drinkName.textContent = name;

  const ingredients = [
    singleDrink.strIngredient1,
    singleDrink.strIngredient2,
    singleDrink.strIngredient3,
    singleDrink.strIngredient4,
    singleDrink.strIngredient5,
  ];
  const ingredientsList = ingredients.map((ingredient) => {
    if (ingredient) {
      return `<li><i class="far fa-check-square"></i>${ingredient}</li>`;
    } else {
      return;
    }
  });
  drinkIngredients.innerHTML = ingredientsList.join("");
};
export default displayDrink;
