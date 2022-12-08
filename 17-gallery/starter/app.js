function getElement(selection) {
  const element = document.querySelector(selection);
  if (element) {
    return element;
  }
  throw new Error(
    `Please check "${selection}" selector, no such element exists`
  );
}

const sections = document.querySelectorAll('.section');
const modal = getElement('.modal');
const closeModalBtn = getElement('.close-btn');
const modalImage = getElement('.main-img');
const modalImages = getElement('.modal-images');
const prevBtn = modal.querySelector('.prev-btn');
const nextBtn = modal.querySelector('.next-btn');
const imageName = modal.querySelector('.image-name');

function showMainImage(imgSrc, imgName) {
  modalImage.src = imgSrc;
  imageName.innerHTML = imgName;
}
function displayImage(imgSrc, list, imgName, id) {
  showMainImage(imgSrc, imgName);
  const imageList = [...list].map((image) => {
    const { title, src } = image;
    const dataId = image.dataset.id;
    return ` <img src=${src} title=${title} id=${dataId} class='${
      id == dataId ? 'modal-img selected' : 'modal-img'
    }' alt="" />`;
  });
  modalImages.innerHTML = imageList.join('');
}
sections.forEach((section) => {
  const list = section.querySelectorAll('.img');
  section.addEventListener('click', function (e) {
    const hasClass = e.target.classList.contains('img');
    const target = e.target;
    //show modal
    modal.classList.add('open');

    if (hasClass) {
      const imgSrc = target.getAttribute('src');
      const imgName = target.getAttribute('title');
      const id = target.dataset.id;
      displayImage(imgSrc, list, imgName, id);
    }
  });
});

closeModalBtn.addEventListener('click', function () {
  modal.classList.remove('open');
});

nextBtn.addEventListener('click', function () {
  let selectedImage = modal.querySelector('.selected');
  let nextImage =
    selectedImage.nextElementSibling || modalImages.firstElementChild;
  selectedImage.classList.remove('selected');
  nextImage.classList.add('selected');
  modalImage.src = nextImage.src;
  imageName.innerHTML = nextImage.title;
});

prevBtn.addEventListener('click', function () {
  let selectedImage = modal.querySelector('.selected');
  let prevImage =
    selectedImage.previousElementSibling || modalImages.lastElementChild;
  selectedImage.classList.remove('selected');
  prevImage.classList.add('selected');
  modalImage.src = prevImage.src;
  imageName.innerHTML = prevImage.title;
});

modalImages.addEventListener('click', function (e) {
  const target = e.target;
  const hasClass = target.classList.contains('modal-img');
  const selectedImage = modal.querySelector('.selected');
  selectedImage.classList.remove('selected');
  if (hasClass) {
    const imgSrc = target.src;
    const imgName = target.title;
    showMainImage(imgSrc, imgName);
    target.classList.add('selected');
  }
});
