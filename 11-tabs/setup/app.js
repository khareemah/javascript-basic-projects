const tabBtns = document.querySelectorAll('.tab-btn');
const tabs = document.querySelectorAll('.content');

tabBtns.forEach((tabBtn) => {
  tabBtn.addEventListener('click', function (e) {
    const target = e.target;
    const targetId = target.dataset.id;
    tabBtns.forEach((tabBtn, index) => {
      if (tabBtn.classList.contains('active')) {
        tabBtn.classList.remove('active');
        tabs[index].classList.remove('active');
      }
      if (tabs[index].id == targetId) {
        tabs[index].classList.add('active');
      }
    });
    target.classList.add('active');
  });
});
