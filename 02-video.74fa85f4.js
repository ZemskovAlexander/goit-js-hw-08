!function(){document.querySelector("#vimeo-player");player.on("timeupdate",(function(e){console.log(e.seconds),localStorage.setItem("videoplayer-current-time",JSON.stringify({time:e}))}));localStorage.getItem("videoplayer-current-time");var e=0;console.log(e)}();
//# sourceMappingURL=02-video.74fa85f4.js.map
