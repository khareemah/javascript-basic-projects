const colors = ['green', 'red', 'rgba(133,122,200)', '#f15025'];
const btn = document.querySelector('.btn');
const color = document.querySelector('.color');

btn.addEventListener('click', changeBackground);
function changeBackground() {
  const random = getRandomNumber();
  console.log(random);
  document.body.style.backgroundColor = colors[random];
  color.textContent = colors[random];
}

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
