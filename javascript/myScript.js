//JQuery
var numberOfPictures = 23;
var timer;

var picList = new Array(24);
var captionData = new Array(24);
var whichPic = 0; //0 means first pic

var fButtonListener;
var bButtonListener;

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
captionData[17] = "Riley ready for the pass";
captionData[18] = "Pep talks from Coach Morgan and Coach Berndt";
captionData[19] = "Clementine with the ball";
captionData[20] = "Clementing keeping the ball away from her defender";
captionData[21] = "Mary working hard";
captionData[22] = "Lindsay going for a ground ball";
captionData[23] = "Grace playing great defense";

$(document).ready(function(){

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


