const product = document.querySelector(".product");
const params = new URLSearchParams(window.location.search);
const id = params.get("id");
const url = `https://course-api.com/javascript-store-single-product?id=${id}`;

function displaySingleProduct(item) {
  const { colors, price, name, description, company } = item.fields;
  const url = item.fields.image[0].url;
  document.title = name.toUpperCase();
  const colorsList = colors
    .map((color) => {
      return `<span class="product-color" style="background: ${color}"></span>`;
    })
    .join("");
  const productDOM = `
  <img src=${url} alt="" class="img">
            <div class="product-info">
                <h3 class="tile">${name}</h3>
                <h5 class="company">${company}</h5>
                <span class="price">$${price / 100}</span>
                <div class="colors">
                  ${colorsList}
                </div>
                <p>${description}</p>
                <button class="btn">add to cart</button>
  `;
  product.innerHTML = `
    <div class="product-wrapper">
    ${productDOM}
  </div>
  `;
}

async function fetchSingleProduct() {
  product.innerHTML = `<h2>Loading...</h2>`;
  try {
    const response = await fetch(url);
    const data = response.json();
    return data;
  } catch (error) {
    product.innerHTML = "<h2>This page is not available...</h2>";
  }
}
async function start() {
  const data = await fetchSingleProduct();
  displaySingleProduct(data);
}
start();
