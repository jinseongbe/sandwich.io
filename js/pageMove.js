/* main page */
function moveHome() {
	location.href = "home.html";
}

function moveAbout() {
	location.href = "about.html";
}

function moveIngredient() {
	location.href = "ingredient.html";
}

/* sandwich module page */
function moveExhibition() {
	location.href = "exhibition.html";
}

function moveMappingTime() {
	location.href = "sub_html/mappingTime/mappingTime.html";
}

function moveCollectedBook() {
	location.href = "sub_html/collectedBook/collectedBook.html";
}

function moveShapeResearch() {
	location.href = "sub_html/shapeResearch/shapeResearch.html";
}

function moveVegetable() {
	location.href = "sub_html/vegetable/vegetable.html";
}

function moveSelfIdentity() {
	location.href = "sub_html/selfIdentity/selfIdentity.html";
}

function moveGroupIdentity() {
	location.href = "sub_html/groupIdentity/groupIdentity.html";
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
