


let GoT_showing = true

function changeImage() {
	var img = document.getElementById("banner");
	var vid = document.getElementById("cobra_video")
	if (GoT_showing) {
		GoT_showing = false
		img.src = "images/Cobra.jpg"
		vid.src = "https://www.youtube.com/embed/x8eRMQtjCBE"
		//alert('This dojo has been taken over by COBRA KAI')
	} else {
		GoT_showing = true
		img.src = "images/dubrovnik.jpg"
		vid.src = "https://www.youtube.com/embed/KPLWWIOCOOQ"
		//alert('The great houses of Westeros have succesfully reclaimed their dominion.')
	}

	
}

//Adjust Box Sizes by longest box
function boxheight() {
	var right=$("#rightbox").height();
	var left=$("#leftbox").height();
	var middle=$("#middlebox").height();
	if(left>right)
	{
	    if(left>middle)
	    {
	    	$("#middlebox").height(left);
			$("#rightbox").height(left);
		}
		else
		{	
			$("#leftbox").height(middle);
			$("#rightbox").height(middle);
		}
	}
	else
	{
	    if(right>middle)
	    {
	    	$("#middlebox").height(right);
			$("#leftbox").height(right);
		}
		else
		{	
			$("#leftbox").height(middle);
			$("#rightbox").height(middle);

		}
	}
}
