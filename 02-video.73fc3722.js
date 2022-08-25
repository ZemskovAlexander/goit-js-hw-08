document.querySelector("#vimeo-player");const e=localStorage.getItem("videoplayer-current-time");let t=0;console.log(t),player.on("timeupdate",(function(e){console.log(e.seconds),localStorage.setItem("videoplayer-current-time",JSON.stringify({time:e}))})),e?t=JSON.parse(e):e=0,player.setCurrentTime(t.seconds);
//# sourceMappingURL=02-video.73fc3722.js.map
