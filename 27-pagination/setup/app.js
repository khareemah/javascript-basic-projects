import fetchFollowers from "./fetchFollowers.js";
import displayFollowers from "./displayFollowers.js";
import paginate from "./paginate.js";
import displayButtons from "./displayButtons.js";

let activeIndex = 0;
let pages = [];
const sectionTitle = document.querySelector(".section-title");
const btnContainer = document.querySelector(".btn-container");

function setupUI() {
  displayFollowers(pages[activeIndex]);
  displayButtons(pages, activeIndex);
}
async function start() {
  const followers = await fetchFollowers();
  sectionTitle.innerHTML = `<h1>Pagination...</h1>
      <div class="underline"></div>`;
  pages = paginate(followers);
  setupUI();
}

btnContainer.addEventListener("click", function (e) {
  const target = e.target;
  if (target.classList.contains("page-btn")) {
    activeIndex = target.dataset.index;
  } else if (target.classList.contains("prev-btn")) {
    activeIndex--;
    if (activeIndex < 0) {
      activeIndex = pages.length - 1;
    }
  } else if (target.classList.contains("next-btn")) {
    activeIndex++;
    if (activeIndex == pages.length) {
      activeIndex = 0;
    }
  }
  setupUI();
});
window.addEventListener("DOMContentLoaded", start);
