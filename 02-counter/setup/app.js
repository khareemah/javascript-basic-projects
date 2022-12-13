const btnContainer = document.querySelector('.button-container');
const counter = document.querySelector('#value');
let value = 0;

btnContainer.addEventListener('click', function (e) {
  const target = e.target;
  if (target.classList.contains('increase')) {
    value += 1;
  } else if (target.classList.contains('decrease')) {
    value -= 1;
  } else {
    value = 0;
  }
  if (value > 0) {
    counter.style.color = 'green';
  } else if (value < 0) {
    counter.style.color = 'red';
  } else {
    counter.style.color = 'black';
  }
  counter.textContent = value;
});
