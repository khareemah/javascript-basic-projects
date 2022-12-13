// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const navToggle = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links');
console.log(linksContainer);
navToggle.addEventListener('click', function () {
  linksContainer.classList.toggle('show-links');
});
