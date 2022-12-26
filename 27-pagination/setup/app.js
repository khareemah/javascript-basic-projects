import fetchFollowers from "./fetchFollowers.js";
import displayFollowers from "./displayFollowers.js";
import paginate from "./paginate.js";
import displayButtons from "./displayButtons.js";

async function start() {
  const followers = await fetchFollowers();
  displayFollowers(followers);
}
window.addEventListener("DOMContentLoaded", start);
