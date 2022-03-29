function changeBackgroundColor(event1) //function to chnage the background color
{
	var color = event1.value;
	document.getElementsByTagName('BODY')[0].style.backgroundColor=color;
}



function changeTextColour(event2)  //function to change the text color of the page
{

	var color = event2.value;
	document.getElementsByTagName('BODY')[0].style.color=color;
}




function mouseOver(src, alt)				//mouseover function to view large image in the page
{	var large = document.getElementById('zoom');
	var modalImg = document.getElementById("img01");
	var descriptionText = document.getElementById("description");

	
		large.style.display = "block";
		modalImg.src = src;
		descriptionText.innerHTML =alt;
	
			
	}