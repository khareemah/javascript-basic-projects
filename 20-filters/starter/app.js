console.log(products);
console.log('filter projects');

const productsContainer = document.querySelector('.products-container');
const inputForm = document.querySelector('.input-form');
const searchInput = document.querySelector('.search-input');
console.log(searchInput);

function fetchProducts(products) {
  const allProducts = products.map((product) => {
    const { id, title, company, image, price } = product;
    return ` <article class="product">
          <img
            src="${image}"
            class="product-img img"
            alt=""
          />
          <footer>
            <h5 class="product-name">high-back bench</h5>
            <span class="product-price">$9.99</span>
          </footer>
        </article>`;
  });
  productsContainer.innerHTML = allProducts.join('');
}

fetchProducts(products);

inputForm.addEventListener('keyup', function () {
  const value = searchInput.value();
  console.log(value);
});
