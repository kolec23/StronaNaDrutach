var min=0;
var sek=1;

function stoper()
{
	sek = sek+1;
	if(sek> 59)
	{
	min=min+1;
	sek=sek-60;
	}
	if(sek<10 && min<10)
	{ 
		
		document.getElementById("zegar").innerHTML ="czytasz artykuł od: <br> 0"+min +" : 0"+ sek;
	}
	if(sek<10 && min>9)
	{
		document.getElementById("zegar").innerHTML ="czytasz artykuł od: <br> "+min +" : 0"+ sek;
	}
	if(sek>9 && min<10)
	{
		document.getElementById("zegar").innerHTML ="czytasz artykuł od: <br> 0"+min +" : "+ sek;
	}
	if(sek>9  && min>9)
	{
		document.getElementById("zegar").innerHTML ="czytasz artykuł od: <br> "+min +" : "+ sek;
	}
	
	setTimeout("stoper();",1000);
}

