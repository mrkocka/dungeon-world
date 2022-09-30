//Button
let chaGenButton = document.getElementById("ChaGen-btn");
let chaback = document.getElementById("char-backButton");
let dowButton = document.getElementById("dow-btn");
let dowback = document.getElementById("dw-backButton");
let usefulButton = document.getElementById("useful-btn");
let usefullback = document.getElementById("useful-backButton");
let impressButton = document.getElementById("impress-btn");
let impressback = document.getElementById("imp-backButton");

//Area
let center = document.getElementById("center-container");
let home = document.getElementById("home-container");
let dowload = document.getElementById("download-container");
let useful = document.getElementById("useful-container");
let impressum = document.getElementById("impressum-container");
let charCreat = document.getElementById("character-creation-container");

//Events
chaGenButton.addEventListener("click", charCreatOC);
chaback.addEventListener("click", charCreatOC);
dowButton.addEventListener("click", downloadOC);
dowback.addEventListener("click", downloadOC);
usefulButton.addEventListener("click", usefulOC);
usefullback.addEventListener("click", usefulOC);
impressButton.addEventListener("click", impressOC);
impressback.addEventListener("click", impressOC);

//Function

//Karakter alkotás
function charCreatOC() {
  center.classList.toggle("js-invisible");
  charCreat.classList.toggle("js-invisible");
}

//Letöltés
function downloadOC() {
  home.classList.toggle("js-invisible");
  dowload.classList.toggle("js-invisible");
}

//Hasznos holmik
function usefulOC() {
  home.classList.toggle("js-invisible");
  useful.classList.toggle("js-invisible");
}

//Impresszum

function impressOC() {
  home.classList.toggle("js-invisible");
  impressum.classList.toggle("js-invisible");
}

function test() {
  console.log("HEJHÓ");
}
