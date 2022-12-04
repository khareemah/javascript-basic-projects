//using selectors inside the element
// traversing the dom

const questions = [...document.querySelectorAll('.question')];

questions.forEach((question) => {
  const questionBtn = question.querySelector('.question-btn');
  questionBtn.addEventListener('click', function () {
    question.classList.toggle('show-text');
    questions.forEach((item) => {
      if (question !== item) {
        item.classList.remove('show-text');
      }
    });
  });
});
