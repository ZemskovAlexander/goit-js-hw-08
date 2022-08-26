!function(){document.querySelector("#vimeo-player");var e=localStorage.getItem("videoplayer-current-time"),t=0;player.on("timeupdate",(function(e){console.log(e.seconds),localStorage.setItem("videoplayer-current-time",JSON.stringify(e.seconds))})),e?t=JSON.parse(e):e=0,player.setCurrentTime(t)}();
//# sourceMappingURL=02-video.c51208c4.js.map
