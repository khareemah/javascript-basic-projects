function Counter(value, counter) {
  this.value = value;
  this.counter = counter;
  this.valDOM = this.counter.querySelector('.value');
  this.valDOM.textContent = this.value;

  // buttons and functionalities
  this.decreaseBtn = this.counter.querySelector('.decrease');
  this.increaseBtn = this.counter.querySelector('.increase');
  this.resetBtn = this.counter.querySelector('.reset');

  //bind eventListeners
  this.decrease = this.decrease.bind(this);
  this.increase = this.increase.bind(this);
  this.reset = this.reset.bind(this);
  this.decreaseBtn.addEventListener('click', this.decrease);
  this.increaseBtn.addEventListener('click', this.increase);
  this.resetBtn.addEventListener('click', this.reset);
}
Counter.prototype.decrease = function () {
  this.value -= 1;
  this.valDOM.textContent = this.value;
};
Counter.prototype.increase = function () {
  this.value += 1;
  this.valDOM.textContent = this.value;
};
Counter.prototype.reset = function () {
  this.value = 0;
  this.valDOM.textContent = this.value;
};
const firstCounter = new Counter(100, getElement('.first-counter'));
const secondCounter = new Counter(200, getElement('.second-counter'));

function getElement(className) {
  const dom = document.querySelector(className);
  if (dom) {
    return dom;
  }
  throw new Error('you made a wrong selection');
}
