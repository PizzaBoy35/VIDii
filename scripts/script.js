// JavaScript Document
var deButton = document.querySelector("button");
var deLijst = document.querySelector("button ul");



deButton.addEventListener("click", klapOpen);

function klapOpen() {
	deButton.classList.toggle("navigation-menu");
}