document.querySelector("#vimeo-player");player.on("timeupdate",(function(e){console.log(e.seconds),localStorage.setItem("videoplayer-current-time",JSON.stringify({time:e}))}));localStorage.getItem("videoplayer-current-time");let e=0;console.log(e);
//# sourceMappingURL=02-video.0c88e5a1.js.map
