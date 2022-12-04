console.log(products);
console.log('filter projects');

const productsContainer = document.querySelector('.products-container');
const inputForm = document.querySelector('.input-form');
const searchInput = document.querySelector('.search-input');
const companiesDOM = document.querySelector('.companies');
// console.log(companies);

function displayProducts(products) {
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
  let companyEl = '';
  companies.forEach((company) => {
    companyEl += ` <button class="company-btn" data-id=${company}>${company}</button>`;
  });
  companiesDOM.innerHTML = companyEl;

  const allCompanies = document.querySelectorAll('.company-btn');
  allCompanies.forEach((company) => {
    company.addEventListener('click', function () {
      const searchValue = company.dataset.id;
      const filterCompany = products.filter(
        (product) => product.company === searchValue
      );
      displayProducts(filterCompany);
    });
  });
}

displayCompanies(products);
displayProducts(products);

inputForm.addEventListener('submit', (e) => {
  e.preventDefault();
});
inputForm.addEventListener('keyup', function (e) {
  e.preventDefault();
  const value = searchInput.value.toLowerCase();
  const inputFilter = products.filter((product) =>
    product.title.includes(value)
  );
  if (inputFilter.length < 1) {
    productsContainer.innerHTML =
      '<h6>sorry,  we no get result for your search</h6>';
    return;
  }
  displayProducts(inputFilter);
});
