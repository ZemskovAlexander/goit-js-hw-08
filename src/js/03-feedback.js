
import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const refs = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('.feedback-form  textarea'),
};


// Не понял как корректно кинуть слушателя на form и отлавливать события с submit и input
// и их аргументами onFormSubmit и функцию throttle(onTextareaInput, 500)

refs.form.addEventListener('submit', onFormSubmit);
refs.textarea.addEventListener('input', throttle(onTextareaInput, 500));


// Видео саши пересмотрел, но не понял как адаптировать кусочек кода, возникает ошибка.
// function initForm() {
//   let persistedData = localStorage.getItem('formData');
//   if (persistedData){
//     persistedData = JSON.parse(persistedData);
//     Object.entries(persistedData).forEach(([name, value]) => {
//       formData[name] = value;
//     //   inputData.elements[name].value = value;  ошибка 03-feedback.js:38 Uncaught ReferenceError: Cannot access 'inputData' before initialization
//      })

//   }
// }

// А в остальном этот код работает :)


populateTextarea();

function onFormSubmit(evt) {
  evt.preventDefault();

  console.log('Отправляем форму');
  evt.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function onTextareaInput(evt) {
  const message = evt.target.value;

  localStorage.setItem(STORAGE_KEY, message);
}

function populateTextarea() {
  const savedMessage = localStorage.getItem(STORAGE_KEY);

  if (savedMessage) {
    refs.textarea.value = savedMessage;
  }
}










// // пред продакшн

// import throttle from 'lodash.throttle';

// const STORAGE_KEY = 'feedback-form-state';
// const formData = {};

// initForm();

// const inputData = document.querySelector('form');

// inputData.addEventListener('submit', e => {
//   e.preventDefault();
//   const formData = new FormData(inputData);
//   formData.forEach((value, name) => console.log(  value, name))
// });

// inputData.addEventListener('input', e => {
//   formData[e.target.name] = e.target.value;
//    console.log(formData);
//    localStorage.setItem('formData', JSON.stringify(formData));
// });

// inputData.addEventListener('reset', e => {
//   console.log('reset');
// })

// function onFormSubmit(e) {  
//     console.log('Отправляем форму');
//     e.currentTarget.reset();
//     localStorage.removeItem(formData);
//   }

// function initForm() {
//   let persistedData = localStorage.getItem('formData');
//   if (persistedData){
//     persistedData = JSON.parse(persistedData);
//     Object.entries(persistedData).forEach(([name, value]) => {
//       formData[name] = value;
//     //   inputData.elements[name].value = value;  ошибка 03-feedback.js:38 Uncaught ReferenceError: Cannot access 'inputData' before initialization
//      })

//   }
// }





// populateTextarea();

/*
 * - Останавливаем поведение по умолчанию
 * - Убираем сообщение из хранилища
 * - Очищаем форму
 */
// function onFormSubmit(evt) {
//   evt.preventDefault();

//   console.log('Отправляем форму');
//   evt.currentTarget.reset();
//   localStorage.removeItem(STORAGE_KEY);
// }

/*
 * - Получаем значение поля
 * - Сохраняем его в хранилище
 * - Добавляем throttle
 */
// function onTextareaInput(evt) {
//   const message = evt.target.value;

//   localStorage.setItem(STORAGE_KEY, message);   
// }

/*
 * - Получаем значение из хранилища
 * - Если там что-то было, обновляем DOM
 */
// function populateTextarea() {
//   const savedMessage = localStorage.getItem(STORAGE_KEY);

//   if (savedMessage) {
//     refs.textarea.value = savedMessage;
//   }
// }

// refs.form.addEventListener('input', e => {
//   console.log(e.target.name);
//   console.log(e.target.value);

//   formData[e.target.name] = e.target.value;

//   console.log(formData);
// });
