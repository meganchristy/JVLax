//JQuery

$(document).ready(function(){
  
});

//javascript

var picList = new Array(13);
var captionData = new Array(13);
var whichPic = 0; //0 means first pic

var fButtonListener;
var bButtonListener;

	//populate array
	picList[0] = "images/lawrence/p0.jpg";
	picList[1] = "images/lawrence/p1.jpg";
	picList[2] = "images/lawrence/p2.jpg";
	picList[3] = "images/lawrence/p3.jpg";
	picList[4] = "images/lawrence/p4.jpg";
	picList[5] = "images/lawrence/p5.jpg";
	picList[6] = "images/lawrence/p60.jpg";
	picList[7] = "images/lawrence/p7.jpg";
	picList[8] = "images/lawrence/p8.jpg";
	picList[9] = "images/lawrence/p9.jpg";
	picList[10] = "images/lawrence/p10.jpg";
	picList[11] = "images/lawrence/p11.jpg";
	picList[12] = "images/lawrence/p12.jpg";

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



window.onload = function() {

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
};

//javascript for govs

var govsPicList = new Array(13);
var govsCaptionData = new Array(13);
var govsWhichPic = 0; //0 means first pic

var govsFButtonListener;
var govsBButtonListener;

	//populate array
	govsPicList[0] = "images/govs/p0.jpg";
	govsPicList[1] = "images/govs/p1.jpg";
	govsPicList[2] = "images/govs/p2.jpg";
	govsPicList[3] = "images/govs/p3.jpg";
	govsPicList[4] = "images/govs/p4.jpg";
	govsPicList[5] = "images/govs/p5.jpg";
	govsPicList[6] = "images/govs/p60.jpg";
	govsPicList[7] = "images/govs/p7.jpg";
	govsPicList[8] = "images/govs/p8.jpg";
	govsPicList[9] = "images/govs/p9.jpg";
	govsPicList[10] = "images/govs/p10.jpg";
	govsPicList[11] = "images/govs/p11.jpg";
	govsPicList[12] = "images/govs/p12.jpg";

	govsCaptionData[0] = "Taylor working the net";
	govsCaptionData[1] = "Megan looking for a pass";
	govsCaptionData[2] = "Blaine heading to net";
	govsCaptionData[3] = "Ainsley getting open";
	govsCaptionData[4] = "Hannah cradling down the field";
	govsCaptionData[5] = "Megan getting ready at the draw";
	govsCaptionData[6] = "Cecily in position";
	govsCaptionData[7] = "Katherine and Cecily ready for anything";
	govsCaptionData[8] = "The team heading to the bench for halftime";
	govsCaptionData[9] = "Ginny and Mary fighting for the ground ball";
	govsCaptionData[10] = "Ginny reaching for the ball";
	govsCaptionData[11] = "Mary getting set on defense";
	govsCaptionData[12] = "Ainsley transitioning the ball down the field";



window.onload = function() {

	document.getElementById("govsPicView").src = govsPicList[govsWhichPic];
	document.getElementById("govsCaption").innerHTML = govsCaptionData[govsWhichPic];


	govsFButtonListener = document.getElementById("govsForwardButton");
	govsBButtonListener = document.getElementById("govsBackButton");

	govsFButtonListener.addEventListener('click',function(event){
		++govsWhichPic;
		if(govsWhichPic >= govsPicList.length){
			govsWhichPic = 0;
		}

		document.getElementById("govsPicView").src = govsPicList[govsWhichPic];
		document.getElementById("govsCaption").innerHTML = govsCaptionData[govsWhichPic];

	});

	govsBButtonListener.addEventListener('click',function(event){
		--govsWhichPic;
		if (govsWhichPic < 0){
			govsWhichPic = govsPicList.length-1
		}

		document.getElementById("govsPicView").src = govsPicList[govsWhichPic];
		document.getElementById("govsCaption").innerHTML = govsCaptionData[govsWhichPic];
	});
};