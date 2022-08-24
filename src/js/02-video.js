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
  else savedTime = setCurrentTime(time.seconds);
}

//  setCurrentTime(parsedTime.seconds)
//  console(setCurrentTime(parsedTime.seconds))
console.log(savedTime)