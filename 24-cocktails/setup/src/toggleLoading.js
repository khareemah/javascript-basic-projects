import getElement from "./getElement.js";

const loading = getElement(".loading");
export function showLoading() {
  loading.classList.remove("hide-loading");
}
export function hideLoading() {
  loading.classList.add("hide-loading");
}
