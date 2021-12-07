/* main page */
function moveHome() {
	location.href = "../../home.html";
}

function moveAbout() {
	location.href = "../../about.html";
}

function moveIngredient() {
	location.href = "../../ingredient.html";
}

function onMouseOverAbout() {
	document.getElementById("aboutTxt").style.marginRight = '0px';
	document.getElementById("aboutTxtHidden").style.display = 'inline';
	document.getElementById("mainImg").style.left = '-59px';
}

function onMouseOutAbout() {
	document.getElementById("aboutTxtHidden").style.display = 'none';
	document.getElementById("aboutTxt").style.marginRight = '50px';
	document.getElementById("mainImg").style.left = '-29.5px';
}