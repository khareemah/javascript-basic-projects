// ****** SELECT ITEMS **********
const submitBtn = document.querySelector('.submit-btn');
const groceryForm = document.querySelector('.grocery-form');
const grocery = document.querySelector('#grocery');
const groceryContainer = document.querySelector('.grocery-container');
const alert = document.querySelector('.alert');
const groceryItems = groceryContainer.querySelector('.grocery-list');
const clearBtn = groceryContainer.querySelector('.clear-btn');
let editFlag = false;
let editElement;
let editID = null;
let groceryValue = '';
let groceryList = [];

// edit option

// ****** EVENT LISTENERS *********
groceryForm.addEventListener('submit', function (e) {
  e.preventDefault();
  groceryValue = grocery.value;
  if (!groceryValue) {
    showMessage({ style: 'danger', message: 'value is empty' });
  } else if (groceryValue && editFlag == false) {
    const groceryItem = {
      name: groceryValue,
      id: new Date().getTime().toString(),
    };
    showMessage({ style: 'success', message: 'grocery item added' });
    groceryContainer.classList.add('show-container');
    addToLocalStorage(groceryItem);
    addGroceryItem(groceryItem);
    // update list in local storage
  } else {
    showMessage({ style: 'success', message: 'grocery item edited' });
    editLocalStorage();
    editElement.querySelector('p').textContent = grocery.value;
    grocery.value = '';
    setToDefault();
  }
});

// ****** FUNCTIONS **********
function showMessage({ style, message }) {
  alert.classList.add(`alert-${style}`);
  alert.innerHTML = message;

  setTimeout(function () {
    alert.innerHTML = '';
    alert.classList.remove(`alert-${style}`);
  }, 1000);
}
function addGroceryItem({ name, id }) {
  grocery.value = '';
  createItem(name, id);
}
function deleteItem(e) {
  const target = e.currentTarget.parentElement.parentElement;
  const id = target.dataset.id;
  deleteFromLocalStorage(id);
  groceryItems.removeChild(target);
  showMessage({ style: 'success', message: 'grocery item removed' });
  setToDefault();
  if (groceryItems.children.length == 0) {
    groceryContainer.classList.remove('show-container');
  }
}
function editItem(e) {
  editElement = e.currentTarget.parentElement.parentElement;
  editFlag = true;
  editID = editElement.dataset.id;
  grocery.value = editElement.querySelector('p').innerText;
  submitBtn.textContent = 'edit';
}
function setToDefault() {
  grocery.value = '';
  editID = null;
  editFlag = false;
  submitBtn.textContent = 'submit';
}
clearBtn.addEventListener('click', function () {
  const list = groceryItems.children;
  groceryList = [];
  clearLocalStorage();
  groceryContainer.classList.remove('show-container');
  [...list].forEach((item) => {
    groceryItems.removeChild(item);
  });
  showMessage({ style: 'danger', message: 'grocery list cleared' });
  setToDefault();
});

// ****** LOCAL STORAGE **********
function addToLocalStorage({ name, id }) {
  groceryList.push({ name, id });
  console.log(groceryList);
  localStorage.setItem('list', JSON.stringify(groceryList));
}
function editLocalStorage() {
  const itemToEdit = groceryList.find((item) => item.id == editID);
  itemToEdit.name = grocery.value;
  localStorage.setItem('list', JSON.stringify(groceryList));
}
function deleteFromLocalStorage(id) {
  groceryList = groceryList.filter((item) => item.id !== id);
  localStorage.setItem('list', JSON.stringify(groceryList));
}
function clearLocalStorage() {
  localStorage.setItem('list', JSON.stringify(groceryList));
}
function createItem(name, id) {
  const element = document.createElement('article');
  element.setAttribute('data-id', id);
  element.classList.add('grocery-item');
  element.innerHTML = `
        <p class="title">${name}</p>
        <div class="btn-container">
            <!-- edit btn -->
            <button type="button" class="edit-btn">
                <i class="fas fa-edit"></i>
            </button>
            <!-- delete btn -->
            <button type="button" class="delete-btn">
                <i class="fas fa-trash"></i>
            </button>
        </div>
    `;
  groceryItems.appendChild(element);
  const deleteBtn = element.querySelector('.delete-btn');
  const editBtn = element.querySelector('.edit-btn');

  deleteBtn.addEventListener('click', deleteItem);
  editBtn.addEventListener('click', editItem);
}
// ****** SETUP ITEMS **********
window.addEventListener('DOMContentLoaded', function () {
  groceryList = JSON.parse(localStorage.getItem('list')) || [];
  if (groceryList.length > 0) {
    groceryContainer.classList.add('show-container');
  }
  groceryList.forEach((item) => {
    const { name, id } = item;
    createItem(name, id);
  });
});
