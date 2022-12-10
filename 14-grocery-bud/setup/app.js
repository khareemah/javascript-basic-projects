// ****** SELECT ITEMS **********
const submitBtn = document.querySelector('.submit-btn');
const groceryForm = document.querySelector('.grocery-form');
const grocery = document.querySelector('#grocery');
const groceryContainer = document.querySelector('.grocery-container');
const alert = document.querySelector('.alert');
const groceryItems = groceryContainer.querySelector('.grocery-list');
const clearBtn = groceryContainer.querySelector('.clear-btn');
let editFlag = false;
let editID = null;
let groceryValue = '';
const groceryList = [];

// edit option

// ****** EVENT LISTENERS *********
groceryForm.addEventListener('submit', function (e) {
  e.preventDefault();
  groceryValue = grocery.value;
  if (!groceryValue) {
    showMessage({ style: 'danger', message: 'value is empty' });
  } else if (groceryValue && editFlag == false) {
    showMessage({ style: 'success', message: 'grocery item added' });
    groceryContainer.classList.add('show-container');
    addGroceryItem(groceryValue);
    //update list in local storage
  } else {
    [...groceryItems.children].forEach((item) => {
      if (item.dataset.id == editID) {
        showMessage({ style: 'success', message: 'grocery item edited' });
        item.querySelector('p').textContent = grocery.value;
        grocery.value = '';
        editFlag = false;
        editID = null;
        submitBtn.textContent = 'submit';
      }
    });
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
function addGroceryItem(groceryValue) {
  // render list item
  grocery.value = '';
  const groceryItem = {
    name: groceryValue,
    id: new Date().getTime().toString(),
  };
  // groceryList.push(groceryItem);
  const { name, id } = groceryItem;
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
function deleteItem(e) {
  const target = e.currentTarget.parentElement.parentElement;
  groceryItems.removeChild(target);
  showMessage({ style: 'success', message: 'grocery item removed' });
  grocery.value = '';
  editID = null;
  editFlag = false;
  submitBtn.textContent = 'submit';
  if (groceryItems.children.length == 0) {
    groceryContainer.classList.remove('show-container');
  }
  //update in local storage
}
function editItem(e) {
  const target = e.currentTarget.parentElement.parentElement;
  editFlag = true;
  editID = target.dataset.id;
  grocery.value = target.innerText;
  submitBtn.textContent = 'edit';
}

console.log('hello');
clearBtn.addEventListener('click', function () {
  const list = groceryItems.children;
  console.log(list);

  groceryContainer.classList.remove('show-container');
  [...list].forEach((item) => {
    groceryItems.removeChild(item);
  });
  showMessage({ style: 'danger', message: 'grocery list cleared' });
});
// ****** LOCAL STORAGE **********

// ****** SETUP ITEMS **********
