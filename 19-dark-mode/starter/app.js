import data from './data.js';

const articlesDOM = document.querySelector('.articles');
const toggleBtn = document.querySelector('.btn');
const rootElement = document.querySelector(':root');

toggleBtn.addEventListener('click', function () {
  rootElement.classList.toggle('dark-theme');
});

fetchArticles();
function fetchArticles() {
  const articles = data.map((article) => {
    const { title, date, length, snippet } = article;
    const formatDate = moment(date).format('MMMM Do, YYYY');
    return `<article class="post">
          <h2>${title}</h2>
          <div class="post-info">
            <span>${formatDate}</span>
            <span>${length} min read</span>
          </div>
          <p>
            ${snippet}
          </p>
        </article>`;
  });
  articlesDOM.innerHTML = articles.join();
}
