const STORAGE_TIME = data.seconds;

const progress = document.querySelector('#vimeo-player');

progress.ontimeupdate = progressUpdate;

function progressUpdate() {
  console.log(video.timeupdate);
}

player.on('timeupdate', function (data) {
  console.log(data.seconds);
  localStorage.setItem('STORAGE_TIME', JSON.stringify({ data }));
});

const parsedData = JSON.parse('STORAGE_TIME');
console.log(parsedData);

function getTime() {
  const savedTime = localStorage.getItem('STORAGE_TIME');

  if (savedTime) {
    data.seconds = savedTime;
  }
}

populateTextarea();

/*
 * - Останавливаем поведение по умолчанию
 * - Убираем сообщение из хранилища
 * - Очищаем форму
 */
function onFormSubmit(evt) {
  evt.preventDefault();

  console.log('Отправляем форму');
  evt.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

/*
 * - Получаем значение поля
 * - Сохраняем его в хранилище
 * - Добавляем throttle
 */
function onTextareaInput(evt) {
  const message = evt.target.value;

  localStorage.setItem(STORAGE_TIME, message);
}

/*
 * - Получаем значение из хранилища
 * - Если там что-то было, обновляем DOM
 */
