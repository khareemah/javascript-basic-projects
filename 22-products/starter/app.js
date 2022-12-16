const api = "https://course-api.com/javascript-store-products";
const productsCenter = document.querySelector(".products-center");

async function fetchProducts() {
  try {
    productsCenter.innerHTML = `<div class="loading"></div>`;
    const response = await fetch(api);
    const data = await response.json();
    return data;
  } catch (error) {
    productsCenter.innerHTML = `<p class="error">There was an error fetching this page</p>`;
  }
}
async function start() {
  const data = await fetchProducts();
  displayProducts(data);
}
function displayProducts(products) {
  const productsList = products
    .map((product) => {
      const { id, fields } = product;
      const { price, name } = fields;
      const url = product.fields.image[0].url;
      return `
    <a class="single-product" href="product.html?id=${id}">
        <img src=${url} class="single-product-img img">
        <footer>
            <h5 class=name>${name}</h5>
            <span class="price">$${price / 100}</span>
        </footer>
    </a>
    `;
    })
    .join("");
  productsCenter.innerHTML = `
    <div class="products-container">
        ${productsList}
    </div>
    `;
}
start();
