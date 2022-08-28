
import throttle from 'lodash.throttle';
const LOCALSTORAGE_KEY = 'feedback-form-state';
const inputData = document.querySelector('form');

initForm();

inputData.addEventListener('submit', evt => {
  evt.preventDefault();
  const formData = new FormData(inputData);
  formData.forEach((value, name) => console.log(value, name));
  
});

inputData.addEventListener('submit', evt => {
  evt.preventDefault();
  const formData = new FormData(inputData);
  formData.forEach((value, name) => console.log(value, name));
  localStorage.removeItem(LOCALSTORAGE_KEY);
  evt.currentTarget.reset()
});


function initForm() {
  let persistedFilters = localStorage.getItem(LOCALSTORAGE_KEY);
  if (persistedFilters) {
    persistedFilters = JSON.parse(persistedFilters);
    Object.entries(persistedFilters).forEach(([name, value]) => {
      inputData.elements[name].value = value;
    });
  }
}