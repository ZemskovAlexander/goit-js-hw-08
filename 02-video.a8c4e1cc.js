!function(){document.querySelector("#vimeo-player");var e=localStorage.getItem("videoplayer-current-time"),o=0;console.log(o),player.on("timeupdate",(function(e){console.log(e.seconds),localStorage.setItem("videoplayer-current-time",JSON.stringify({time:e}))})),e?o=JSON.parse(e):e=setCurrentTime(time.seconds),console.log(e)}();
//# sourceMappingURL=02-video.a8c4e1cc.js.map
