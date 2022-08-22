const progress = document.querySelector('#vimeo-player');

player.on('timeupdate', function (time) {
  console.log(time.seconds);
  localStorage.setItem('videoplayer-current-time', JSON.stringify({ time }));
});

const savedTime = localStorage.getItem("videoplayer-current-time")

let parsedTime = 0;
console.log(parsedTime)

function onTimeWatch(savedTime) {
  if (savedTime) {
    parsedTime = JSON.parse(savedTime);
  }
  else parsedTime = 0;
}
