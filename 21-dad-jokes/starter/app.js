const para = document.querySelector(".result");
const btn = document.querySelector(".btn");
btn.addEventListener("click", fetchDadJoke);

const url = " https://icanhazdadjoke.com/";
async function fetchDadJoke() {
  para.innerText = "loading...";
  try {
    const response = await fetch(url, {
      headers: {
        Accept: "application/json",
        "User-Agent": "learning app",
      },
    });
    if (response.ok == false) {
      throw new Error("Page does not exits...");
    }
    const data = await response.json();
    para.innerText = data.joke;
  } catch (error) {
    console.log(error);
    para.textContent = error.message;
  }
}
window.addEventListener("DOMContentLoaded", fetchDadJoke);
