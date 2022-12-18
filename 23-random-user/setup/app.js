function getElement(selector) {
  const element = document.querySelector(selector);
  if (element) {
    return element;
  }
  throw new Error(`${selector} is not a correct selection`);
}
function removeActiveClass() {
  btns.forEach((btn) => btn.classList.remove("active"));
}
const api = "https://randomuser.me/api/";
const img = getElement(".user-img");
const title = getElement(".user-title");
const value = getElement(".user-value");
const btn = getElement(".btn");
const btns = [...document.querySelectorAll(".icon")];

async function fetchUser() {
  const response = await fetch(api);
  const data = await response.json();
  return data;
}

function createPersonData(data) {
  let person = data.results[0];
  const src = person.picture.large;
  const { first, last } = person.name;
  const {
    email,
    phone,
    dob: { age },
  } = person;
  const { number, name } = person.location.street;
  const { password } = person.login;

  return {
    name: `${first} ${last}`,
    street: `${number}, ${name}`,
    email,
    phone,
    age,
    password,
    src,
  };
}
async function showUser() {
  const data = await fetchUser();
  const person = createPersonData(data);
  const { src, name } = person;
  img.src = src;
  title.textContent = "my name is";
  value.textContent = name;
  // btns[0].classList.add("active");
  btns.forEach((btn) => {
    btn.addEventListener("click", function () {
      const key = btn.dataset.label;
      title.textContent = `my ${key} is`;
      value.textContent = person[key];
      removeActiveClass();
      btn.classList.add("active");
    });
  });
}
window.addEventListener("DOMContentLoaded", showUser);
btn.addEventListener("click", function () {
  removeActiveClass();
  showUser();
});
