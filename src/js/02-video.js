const progress = document.querySelector('#vimeo-player');

const savedTime = localStorage.getItem("videoplayer-current-time")

let parsedTime = 0;

player.on('timeupdate', function (time) {
  console.log(time.seconds);
  localStorage.setItem('videoplayer-current-time', JSON.stringify( time.seconds ));
});

onTimeWatch()

function onTimeWatch() {  
  if (savedTime) {
    parsedTime = JSON.parse(savedTime);
  }
  else savedTime = 0;
}

player.setCurrentTime(parsedTime)
