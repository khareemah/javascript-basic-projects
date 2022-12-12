const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prevBtn');
const nextBtn = document.querySelector('.nextBtn');
let counter = 0;
console.log(slides);

slides.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});

prevBtn.addEventListener('click', function () {
  counter--;
  showSlide();
});
nextBtn.addEventListener('click', function () {
  counter++;
  showSlide();
});
function showSlide() {
  slides.forEach((slide, index) => {
    // if (counter == slides.length) {
    //   counter = 0;
    // } else if (counter < 0) {
    //   counter = slides.length - 1;
    // }
    if (counter > 0) {
      prevBtn.style.display = 'block';
    } else {
      prevBtn.style.display = 'none';
    }
    if (counter == slides.length - 1) {
      nextBtn.style.display = 'none';
    } else {
      nextBtn.style.display = 'block';
    }
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
}
prevBtn.style.display = 'none';
