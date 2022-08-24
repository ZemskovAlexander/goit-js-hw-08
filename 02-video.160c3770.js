document.querySelector("#vimeo-player");const e=localStorage.getItem("videoplayer-current-time");let o=0;console.log(o),player.on("timeupdate",(function(e){console.log(e.seconds),localStorage.setItem("videoplayer-current-time",JSON.stringify({time:e}))})),e?o=JSON.parse(e):e=setCurrentTime(time.seconds),console.log(e);
//# sourceMappingURL=02-video.160c3770.js.map
