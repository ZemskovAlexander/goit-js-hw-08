data.seconds;document.querySelector("#vimeo-player").ontimeupdate=function(){console.log(video.timeupdate)},player.on("timeupdate",(function(e){console.log(e.seconds),localStorage.setItem("STORAGE_TIME",JSON.stringify({data:e}))}));const e=JSON.parse("STORAGE_TIME");console.log(e),populateTextarea();
//# sourceMappingURL=02-video.718f02cd.js.map
