// JavaScript Document

// buttons in button section
const navigatieButton = document.querySelector("section.navigatie button");
const terugButton = document.querySelector("section.navigatieBack button");


navigatieButton.addEventListener("click", goFurther);
terugButton.addEventListener("click", goBack);


function goFurther() {
	document.body.classList.add("further");
}

function goBack() {
	document.body.classList.add("back");
}
