function getElement(selector) {
  const element = document.querySelector(selector);
  if (element) {
    return element;
  }
  throw new Error(
    `Please check "${selector}" selector, no such element exists`
  );
}
const modal = getElement('.modal');
const closeModalBtn = getElement('.close-btn');
function gallery(section) {
  const list = getElement(section);
  list.addEventListener('click', function () {
    modal.classList.add('open');
  });
  closeModalBtn.addEventListener('click', function () {
    modal.classList.remove('open');
  });
  return {};
}

const firstSection = gallery('.nature');
const secondSection = gallery('.city');
// console.log(firstSection, secondSection);
