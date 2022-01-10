function changeImage() {
	let img = document.getElementById("Banner");
	if (img.src.match("GoT")) {
		img.src = "images/Cobra.jpg"
		alert('This dojo has been taken over by COBRA KAI')
		}
	
}