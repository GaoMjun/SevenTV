(function(vjs){var defaults={image:'',destination:'#'};var logobrand=function(options){var settings=videojs.mergeOptions(defaults,options),player=this;var link=document.createElement("a");link.id="vjs-logobrand-image-destination";link.href=settings.destination;link.target="_top";var image=document.createElement('img');image.id='vjs-logobrand-image';image.src=settings.image;link.appendChild(image);player.el().appendChild(link);this.loadImage=function(src){document.getElementById("vjs-logobrand-image").src=src;};this.setDestination=function(href){document.getElementById("vjs-logobrand-image-destination").href=href;};return this;};vjs.plugin('logobrand',logobrand);}(window.videojs));