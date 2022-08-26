const progress = document.querySelector('#vimeo-player');

const savedTime = localStorage.getItem("videoplayer-current-time")

let parsedTime = 0;
console.log(parsedTime)

player.on('timeupdate', function (time) {
  console.log(time.seconds);
  localStorage.setItem('videoplayer-current-time', JSON.stringify({ time }));
});

onTimeWatch()

function onTimeWatch() {  
  if (savedTime) {
    parsedTime = JSON.parse(savedTime);
  }
  else savedTime = 0;
}

player.setCurrentTime(parsedTime)


// Добрый вечер. Подскажие как правильно вписать setCurrentTime(parsedTime.seconds) ? Осталось перелать время в из localStorage в плеер. Спасибо.
