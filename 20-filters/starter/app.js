const productsContainer = document.querySelector('.products-container');
const inputForm = document.querySelector('.input-form');
const searchInput = document.querySelector('.search-input');
const companiesContainer = document.querySelector('.companies');

window.addEventListener('DOMContentLoaded', function () {
  displayCompanies(products);
  displayProducts(products);

  companiesContainer.addEventListener('click', function (e) {
    searchInput.value = '';
    const hasClass = e.target.classList.contains('company-btn');
    const target = e.target.dataset.id;

    if (hasClass) {
      if (target == 'all') {
        displayProducts(products);
        return;
      }
      const companyFilter = products.filter(
        (product) => product.company === target
      );
      displayProducts(companyFilter);
    }
  });
  //   const allCompanies = document.querySelectorAll('.company-btn');
  //   allCompanies.forEach((company) => {
  // company.addEventListener('click', function () {
  //   const searchValue = company.dataset.id;
  //   if (searchValue === 'all') {
  //     displayProducts(products);
  //     return;
  //   }
  //   const companyFilter = products.filter(
  //     (product) => product.company === searchValue
  //   );
  //   displayProducts(companyFilter);
  // });
  //   });
});

function displayProducts(products) {
  if (products.length === 0) {
    productsContainer.innerHTML =
      '<h6>sorry,  we no get result for your search</h6>';
    return;
  }
  const allProducts = products.map((product) => {
    const { id, title, image, price } = product;
    return ` <article class="product" data-id=${id}>
          <img
            src=${image}
            class="product-img img"
            alt=""
          />
          <footer>
            <h5 class="product-name">${title}</h5>
            <span class="product-price">$${price}</span>
          </footer>
        </article>`;
  });
  productsContainer.innerHTML = allProducts.join('');
}
function displayCompanies(products) {
  const companies = [
    'all',
    ...new Set(products.map((product) => product.company)),
  ];

  const allCompanies = companies.map((company) => {
    return ` <button class="company-btn" data-id=${company}>${company}</button>`;
  });
  companiesContainer.innerHTML = allCompanies.join('');
}

inputForm.addEventListener('submit', (e) => {
  e.preventDefault();
});
inputForm.addEventListener('keyup', function (e) {
  e.preventDefault();
  const value = searchInput.value.toLowerCase();
  const inputFilter = products.filter((product) =>
    product.title.includes(value)
  );
  displayProducts(inputFilter);
});
