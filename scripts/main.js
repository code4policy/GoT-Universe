

function update_house_text_1() {

	document.getElementById("house_words").innerHTML = "House Stark";

}

function update_house_text_2() {

	document.getElementById("house_words").innerHTML = "House something";

}

function update_house_text_3() {

	document.getElementById("house_words").innerHTML = "House Stark";

}

function update_house_text_4() {

	document.getElementById("house_words").innerHTML = "House something";

}
function update_house_text_5() {

	document.getElementById("house_words").innerHTML = "House Stark";

}

function update_house_text_6() {

	document.getElementById("house_words").innerHTML = "House something";

}

function update_house_text_7() {

	document.getElementById("house_words").innerHTML = "House Stark";

}

function update_house_text_8() {

	document.getElementById("house_words").innerHTML = "House something";

}

function update_house_text_9() {

	document.getElementById("house_words").innerHTML = "House Stark";

}


function changeImage() {
	var img = document.getElementById("Banner");
	var vid = document.getElementById("Cobra_Video")
	if (img.src.match("GoT")) {
		img.src = "images/Cobra.jpg"
		vid.src = "https://www.youtube.com/embed/x8eRMQtjCBE"
		alert('This dojo has been taken over by COBRA KAI')
		}
	else {
		img.src = "images/GoT_Banners.jpg"
		alert('The great houses of Westeros have succesfully reclaimed their dominion.')
	}

	
}
