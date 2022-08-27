
import throttle from 'lodash.throttle';
const LOCALSTORAGE_KEY = 'feedback-form-state';
const inputData = document.querySelector('form');

initForm();

inputData.addEventListener('submit', evt => {
  evt.preventDefault();
  const formData = new FormData(inputData);
  formData.forEach((value, name) => console.log(value, name));
  
});

inputData.addEventListener('change', evt => {
  let persistedFilters = localStorage.getItem(LOCALSTORAGE_KEY);
  persistedFilters = persistedFilters ? JSON.parse(persistedFilters) : {};
  persistedFilters[evt.target.name] = evt.target.value;
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(persistedFilters));
});

// Подскажите с ресетом пожалуйста
inputData.addEventListener('submit', () => {
  localStorage.removeItem(LOCALSTORAGE_KEY);
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