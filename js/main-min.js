function init(){myMap=new ymaps.Map("map",{center:[59.939349,30.329175],zoom:16,controls:[],type:"yandex#map"},{searchControlProvider:"yandex#search"});var a=new ymaps.Placemark([59.938631,30.323055],{hintContent:"Магазин мороженого - Gllacy",balloonContent:"Мы находимся тут!"},{iconLayout:"default#image",iconImageHref:"img/pin.png",
iconImageSize:[80,140],iconImageOffset:[-40,-140]});myMap.geoObjects.add(a),myMap.behaviors.disable("scrollZoom")}ymaps.ready(init);var myMap;

var link=document.querySelector(".index-map__btn"),popup=document.querySelector(".feedback"),close=popup.querySelector(".feedback__closed"),overlay=document.querySelector(".overlay");link.addEventListener("click",function(a){a.preventDefault(),popup.classList.add("feedback-show-js"),overlay.classList.add("overlay-js")}),close.addEventListener("click",function(a)
{a.preventDefault(),popup.classList.remove("feedback-show-js"),overlay.classList.remove("overlay-js")}),overlay.addEventListener("click",function(a){a.preventDefault(),overlay.classList.remove("overlay-js"),popup.classList.remove("feedback-show-js")});
