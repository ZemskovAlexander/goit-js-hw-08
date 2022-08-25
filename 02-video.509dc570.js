!function(){document.querySelector("#vimeo-player");var e=localStorage.getItem("videoplayer-current-time"),o=0;console.log(o),player.on("timeupdate",(function(e){console.log(e.seconds),localStorage.setItem("videoplayer-current-time",JSON.stringify({time:e}))})),e?o=JSON.parse(e):e=0,player.setCurrentTime(o.seconds)}();
//# sourceMappingURL=02-video.509dc570.js.map
