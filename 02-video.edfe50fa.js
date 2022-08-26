document.querySelector("#vimeo-player");const e=localStorage.getItem("videoplayer-current-time");let t=0;player.on("timeupdate",(function(e){console.log(e.seconds),localStorage.setItem("videoplayer-current-time",JSON.stringify(e.seconds))})),e?t=JSON.parse(e):e=0,player.setCurrentTime(t);
//# sourceMappingURL=02-video.edfe50fa.js.map
