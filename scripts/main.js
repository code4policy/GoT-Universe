


let GoT_showing = true

function changeImage(name, message,home) {
	var img = document.getElementById("banner");
	var vid = document.getElementById("Trailer")
	if (GoT_showing) {
		GoT_showing = false
		$("#banner").height(830)
		img.src = "images/"+name+".jpg"
		alert(message)
		vid.src = "https://www.youtube.com/embed/xCwwxNbtK6Y"
		
	} else {
		GoT_showing = true
		$("#banner").height(230)
		img.src = "images/"+home+".jpg"
		alert('The great houses of Westeros have succesfully reclaimed their dominion.')
		vid.src = "https://www.youtube.com/embed/KPLWWIOCOOQ"
		
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
