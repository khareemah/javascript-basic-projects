const btnContainer = document.querySelector(".btn-container");
const displayButtons = (pages, activeIndex) => {
  const btnsList = pages
    .map((_, index) => {
      return `<button class="page-btn ${
        index == activeIndex && "active-btn"
      }"  data-index="${index}">
${index + 1}
</button>`;
    })
    .join("");
  btnContainer.innerHTML = `
   <button class="prev-btn">prev</button>
        ${btnsList}
    <button class="next-btn">next</button>
  `;
};

export default displayButtons;
