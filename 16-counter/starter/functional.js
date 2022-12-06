const btnContainers = document.querySelectorAll('.button-container');
const startValues = [100, 200];
btnContainers.forEach(function (btnContainer, index) {
  const value = btnContainer.previousElementSibling;
  value.textContent = startValues[index];
  let count = startValues[index];
  btnContainer.addEventListener('click', function (e) {
    const target = e.target;
    if (target.classList.contains('decrease')) {
      count--;
    } else if (target.classList.contains('increase')) {
      count++;
    } else {
      count = 0;
    }
    value.textContent = count;
  });
});
