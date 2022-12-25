import people from "./data.js";
function getElement(selector) {
  const element = document.querySelector(selector);
  if (element) {
    return element;
  }
  throw new Error(`${selector} class does not exist`);
}

const slideContainer = getElement(".slide-container");
slideContainer.innerHTML = people
  .map((person, index) => {
    let position = "next";
    if (index == 0) {
      position = "active";
    }
    if (index == people.length - 1) {
      position = "last";
    }
    const { img, name, job, text } = person;
    return `<article class="slide ${position}">
        <img
          src=${img}
          class="img"
          alt=${name}
        />
        <h4>${name}</h4>
        <p class="title">${job}</p>
        <p class="text">
          ${text}
        </p>
        <div class="quote-icon">
          <i class="fas fa-quote-right"></i>
        </div>
      </article>`;
  })
  .join("");

const prevBtn = getElement(".prev-btn");
const nextBtn = getElement(".next-btn");

function startSlider(type) {
  const active = getElement(".active");
  const last = getElement(".last");
  let next = active.nextElementSibling;

  if (!next) {
    next = slideContainer.firstElementChild;
  }

  //remove all classes

  active.classList.remove("active");
  last.classList.remove("last");
  next.classList.remove("next");

  if (type == "prev") {
    active.classList.add("next");
    last.classList.add("active");
    next = last.previousElementSibling;
    if (!next) {
      next = slideContainer.lastElementChild;
    }
    next.classList.remove("next");
    next.classList.add("last");
    return;
  }
  //add class to change slide that is active
  active.classList.add("last");
  last.classList.add("next");
  next.classList.add("active");
}
nextBtn.addEventListener("click", startSlider);
prevBtn.addEventListener("click", function () {
  startSlider("prev");
});
