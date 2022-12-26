import fetchFollowers from "./fetchFollowers.js";
import displayFollowers from "./displayFollowers.js";
import paginate from "./paginate.js";
import displayButtons from "./displayButtons.js";

let activeIndex = 0;
let pages = [];
const sectionTitle = document.querySelector(".section-title");

async function start() {
  const followers = await fetchFollowers();
  sectionTitle.innerHTML = `<h1>Pagination...</h1>
      <div class="underline"></div>`;
  pages = paginate(followers);
  displayFollowers(pages[activeIndex]);
  displayButtons(pages, activeIndex);
}
window.addEventListener("DOMContentLoaded", start);
