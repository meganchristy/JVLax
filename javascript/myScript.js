//JQuery
var numberOfPictures = 38;
var timer;

var picList = new Array(39);
var captionData = new Array(39);
var whichPic = 0; //0 means first pic

var fButtonListener;
var bButtonListener;

//typewriter
var text="St. Mark's Girls Lacrosse";
var delay=50;
var currentChar=1;
var destination="[not defined]";

function type()
{
  if (document.getElementById)
  {
    var dest=document.getElementById(destination);
    if (dest)
    {
      dest.innerHTML=text.substr(0, currentChar);
      currentChar++
      if (currentChar>text.length)
      {
        currentChar=1;
        setTimeout("type()", 5000);
      }
      else
      {
        setTimeout("type()", delay);
      }
    }
  }
}

function startTyping(textParam, delayParam, destinationParam)
{
  text=textParam;
  delay=delayParam;
  currentChar=1;
  destination=destinationParam;
  type();
}


function setPicture(){

	var rndNum = Math.floor(Math.random()*numberOfPictures);
	var picName = "images/slideshowPics/p" + rndNum + ".jpg"

	$('body').css("background-image", ("url(" + picName +")") );
};


//populate array
picList[0] = "images/slideshowPics/p0.jpg";
picList[1] = "images/slideshowPics/p1.jpg";
picList[2] = "images/slideshowPics/p2.jpg";
picList[3] = "images/slideshowPics/p3.jpg";
picList[4] = "images/slideshowPics/p4.jpg";
picList[5] = "images/slideshowPics/p5.jpg";
picList[6] = "images/slideshowPics/p6.jpg";
picList[7] = "images/slideshowPics/p7.jpg";
picList[8] = "images/slideshowPics/p8.jpg";
picList[9] = "images/slideshowPics/p9.jpg";
picList[10] = "images/slideshowPics/p10.jpg";
picList[11] = "images/slideshowPics/p11.jpg";
picList[12] = "images/slideshowPics/p12.jpg";
picList[13] = "images/slideshowPics/p13.jpg";
picList[14] = "images/slideshowPics/p14.jpg";
picList[15] = "images/slideshowPics/p15.jpg";
picList[16] = "images/slideshowPics/p16.jpg";
picList[17] = "images/slideshowPics/p17.jpg";
picList[18] = "images/slideshowPics/p18.jpg";
picList[19] = "images/slideshowPics/p19.jpg";
picList[20] = "images/slideshowPics/p20.jpg";
picList[21] = "images/slideshowPics/p21.jpg";
picList[22] = "images/slideshowPics/p22.jpg";
picList[23] = "images/slideshowPics/p23.jpg";
picList[24] = "images/slideshowPics/p24.jpg";
picList[25] = "images/slideshowPics/p25.jpg";
picList[26] = "images/slideshowPics/p26.jpg";
picList[27] = "images/slideshowPics/p27.jpg";
picList[28] = "images/slideshowPics/p28.jpg";
picList[29] = "images/slideshowPics/p29.jpg";
picList[30] = "images/slideshowPics/p30.jpg";
picList[31] = "images/slideshowPics/p31.jpg";
picList[32] = "images/slideshowPics/p32.jpg";
picList[33] = "images/slideshowPics/p33.jpg";
picList[34] = "images/slideshowPics/p34.jpg";
picList[35] = "images/slideshowPics/p35.jpg";
picList[36] = "images/slideshowPics/p36.jpg";
picList[37] = "images/slideshowPics/p37.jpg";
picList[38] = "images/slideshowPics/p38.jpg";

captionData[0] = "Taylor working the net";
captionData[1] = "Megan looking for a pass";
captionData[2] = "Blaine heading to net";
captionData[3] = "Ainsley getting open";
captionData[4] = "Hannah cradling down the field";
captionData[5] = "Megan getting ready at the draw";
captionData[6] = "Cecily in position";
captionData[7] = "Katherine and Cecily ready for anything";
captionData[8] = "The team heading to the bench for halftime";
captionData[9] = "Ginny and Mary fighting for the ground ball";
captionData[10] = "Ginny reaching for the ball";
captionData[11] = "Mary getting set on defense";
captionData[12] = "Ainsley transitioning the ball down the field";
captionData[13] = "Clementine cutting to the ball";
captionData[14] = "Laura dodging her defenders";
captionData[15] = "Katherine heading back for the draw";
captionData[16] = "Cait looking for a shot";
captionData[17] = "Blaine at the ready";
captionData[18] = "Pep talks from Coach Morgan and Coach Berndt";
captionData[19] = "Megan during the draw";
captionData[20] = "Clementine keeping the ball away from her defender";
captionData[21] = "Mary working hard";
captionData[22] = "Lindsay going for a ground ball";
captionData[23] = "Grace playing great defense";
captionData[24] = "Kerrie playing great";
captionData[25] = "Sanjna watching the ball move down the field";
captionData[26] = "Ginny beating her defender";
captionData[27] = "Hannah cradling around";
captionData[28] = "Clementine going for the catch";
captionData[29] = "'St. Mark's on 3... ONE TWO THREE, ST. MARK'S!";
captionData[30] = "Clementine heading to the net";
captionData[31] = "Mary working hard to defend the ball";
captionData[32] = "Megan getting set at the draw";
captionData[33] = "Clementine cradling the invisible ball";
captionData[34] = "Close up of Clementine!";
captionData[35] = "Megan cutting to the ball";
captionData[36] = "Ginny avoiding her defender";
captionData[37] = "Clementine chasing the ball";
captionData[38] = "Blaine vs. her defender";

$(document).ready(function(){

	startTyping(text, 75, "textDestination");

	$('body').css({
   
     backgroundSize		: 'cover',
     backgroundRepeat   : 'no-repeat',
     
	});  

	timer = setInterval(setPicture, 2500);

	document.getElementById("picView").src = picList[whichPic];
	document.getElementById("caption").innerHTML = captionData[whichPic];


	fButtonListener = document.getElementById("forwardButton");
	bButtonListener = document.getElementById("backButton");

	fButtonListener.addEventListener('click',function(event){
		++whichPic;
		if(whichPic >= picList.length){
		whichPic = 0;
	}

	document.getElementById("picView").src = picList[whichPic];
	document.getElementById("caption").innerHTML = captionData[whichPic];

	});

	bButtonListener.addEventListener('click',function(event){
		--whichPic;
		if (whichPic < 0){
		whichPic = picList.length-1
	}

	document.getElementById("picView").src = picList[whichPic];
	document.getElementById("caption").innerHTML = captionData[whichPic];
	});
});


