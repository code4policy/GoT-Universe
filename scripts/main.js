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