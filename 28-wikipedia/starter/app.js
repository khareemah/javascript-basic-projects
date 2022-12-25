const searchForm = document.querySelector(".form");
const input = document.querySelector(".form-input");
const results = document.querySelector(".results");

const url =
  "https://en.wikipedia.org/w/api.php?action=query&list=search&srlimit=20&format=json&origin=*&srsearch=";

searchForm.addEventListener("submit", async function (e) {
  e.preventDefault();
  const inputValue = input.value;
  if (!inputValue) {
    results.innerHTML = `<h2>please, enter a valid value</h2>`;
    return;
  }
  results.innerHTML = "<h2>Loading...</h2>";
  try {
    const response = await fetch(`${url}${inputValue}`);
    const data = await response.json();
    const dataArr = data.query.search;
    displayResults(dataArr);
  } catch (error) {
    results.innerHTML = "<h2>An error Occured</h2>";
  }
});

function displayResults(dataArr) {
  if (dataArr.length == 0) {
    results.innerHTML = `<h2>Sorry my dear, no result matched your search</h2>`;
    return;
  }
  console.log(dataArr);
  const cardsList = dataArr
    .map((data) => {
      const { title, pageid, snippet } = data;
      return `<a href=http://en.wikipedia.org/?curid=${pageid} target="_blank">
            <h4>${title}</h4>
            <p>
              ${snippet}
            </p>
          </a>`;
    })
    .join("");
  results.innerHTML = `<div class="articles">
          ${cardsList}
        </div>`;
}
