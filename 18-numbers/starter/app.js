const numbers = [...document.querySelectorAll(".number")];
function updateCount(number) {
  const value = parseInt(number.dataset.value);
  let count = 0;
  let range = Math.ceil(value / 2000);
  const timeout = setInterval(function () {
    count += range;
    if (count > value) {
      clearInterval(timeout);
      number.textContent = `${value}+`;
    } else {
      number.textContent = `${count}+`;
    }
  }, 1);
}

numbers.forEach(function (number) {
  updateCount(number);
});
