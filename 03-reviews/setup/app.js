// local reviews data
const reviews = [
  {
    id: 1,
    name: 'susan smith',
    job: 'web developer',
    img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: 'anna johnson',
    job: 'web designer',
    img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg',
    text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
  },
  {
    id: 3,
    name: 'peter jones',
    job: 'intern',
    img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
    text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
  },
  {
    id: 4,
    name: 'bill anderson',
    job: 'the boss',
    img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
    text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
  },
];

const btnContainer = document.querySelector('.button-container');
const randomButton = document.querySelector('.random-btn');
const prevBtn = btnContainer.querySelector('.prev-btn');
const nextBtn = btnContainer.querySelector('.next-btn');
const imgDOM = document.querySelector('#person-img');
const authorDOM = document.querySelector('#author');
const jobDOM = document.querySelector('#job');
const infoDOM = document.querySelector('#info');

let counter = 0;
nextBtn.addEventListener('click', showNextPerson);
prevBtn.addEventListener('click', showPrevPerson);
randomButton.addEventListener('click', showRandomPerson);

function checkIndex() {
  if (counter == reviews.length) {
    counter = 0;
  } else if (counter < 0) {
    counter = reviews.length - 1;
  }
}

function showNextPerson() {
  counter++;
  checkIndex();
  showPerson();
}
function showPrevPerson() {
  counter--;
  checkIndex();
  showPerson();
}

function showRandomPerson() {
  let random = Math.floor(Math.random() * reviews.length);
  // counter = counter === random ? random + 1 : random;
  if (counter === random) {
    counter = random + 1;
  } else {
    counter = random;
  }
  checkIndex();
  showPerson();
}
function showPerson() {
  const person = reviews[counter];
  const { name, job, img, text } = person;
  imgDOM.src = img;
  jobDOM.textContent = job;
  infoDOM.textContent = text;
  authorDOM.textContent = name;
}

window.addEventListener('DOMContentLoaded', showPerson);
