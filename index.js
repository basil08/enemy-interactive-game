/* 
 * The Game Engine v1.0
 */

// 25 is oh, say how you want us to improve(since you are leaving the game midway)
// 26 is end-credits starts 
// 27 is end-credits continued



let s0 = {
	id:"0",
	img:"images/scene0.jpg",
	text:"Start Exploring?",
	dec:["Yes","No"]
};

let s1 = {
	id:"1",
	img:"images/featuring-sadao.jpg",
	text:"Dr. Sadao Hoki - the protagonist of the story.",
	dec:["OK"]
};

let s2 = {
	id:"2",
	img:"images/featuring-hana.jpg",
	text:"Hana - Sadao's wife.",
	dec:["OK"]
}

let s3 = {
	id:"3",
	img:"images/featuring-general.jpg",
	text:"The General - A Japanese WW2 General.",
	dec:["OK"]
}

let s4 = {
	id:"4",
	img:"images/featuring-servants.jpg",
	text:"Ready Player One?",
	dec:["Yes","No"]
}

let s5 = {
	id:"5",
	img:"images/scene1.jpg",
	text:"Dr. Sadoa Hoki's house was built on the Japanese coast set upon rocks that was outlined by bent pines.",
	dec:["OK"]
};

let s6 = {
	id:"6",
	img:"images/scene2.jpg",
	text:"Standing at the veranda, looking at the vast and mighty sea was a habit of Dr. Sadao",
	dec:["OK"]
}

let s7 = {
	id:"7",
	img:"images/scene3.jpg",
	text:"His father had taken the little boy to the islands of the sea and said 'Those islands yonder, they are the stepping stones to the future for Japan.'</b>",
	dec:["OK"]
}

let s8 = {
	id:"8",
	img:"images/scene4.jpg",
	text:"At this moment, the door opens and Hana came to him affectionately, dressed in a dark-blue haori over her kimono.",
	dec:["OK"]
}

let s9 = {
	id:"9",
	img:"images/scene5.jpg",
	text:"It was by chance that they had met and fallen in love in America where Sadao had gone to study medicine.",
	dec:["OK"]
}

let s10 = {
	id:"10",
	img:"images/scene6.jpg",
	text:"Suddenly, they spotted a dark figure washed ashore.",
	dec:["OK"]
}

let s11 = {
	id:"11",
	img:"images/scene7.jpg",
	text:"To their dismay, the figure was not a Japanese fisherman but an American prisoner of war!",
	dec:["OK"]
}

let s12 = {
	id:"12",
	img:"images/scene8.jpg",
	text:"After much conflict, they secretly smuggled him into the house in the dead quiet of the night.",
	dec:["OK"]
}

let s13 = {
	id:"13",
	img:"images/scene9.jpg",
	text:"Yumi, the housemaid, refused to touch the man.<br>Hence, Hana, herself, cleaned the helpless youth.",
	dec:["OK"]
}

let s14 = {
	id:"14",
	img:"images/scene10.jpg",
	text:"Sadao operated on the man and it was his expertise that ultimately saved the life of the American soldier.",
	dec:["OK"]
}

let s15 = {
	id:"15",
	img:"images/scene11.jpg",
	text:"Servants quietly expressed their disapprovals at the behavior of their masters.",
	dec:["OK"]
}

let s16 = {
	id:"16",
	img:"images/scene12.jpg",
	text:"Sadao decides to write a letter to the police but somehow, could never finish it.",
	dec:["OK"]
}

let s17 = {
	id:"17",
	img:"images/scene13.jpg",
	text:"A messenger arrives with the news of the General's deteriorating health. Sadao is immediately summoned.",
	dec:["OK"]
}

let s18 = {
	id:"18",
	img:"images/scene14.jpg",
	text:"Sadao and the General conspire to send assassins to kill the American to let Sadao off the hook.",
	dec:["OK"]
}

let s19 = {
	id:"19",
	img:"images/scene15.jpg",
	text:"The first night.",
	dec:["OK"]
}

let s20 = {
	id:"20",
	img:"images/scene16.jpg",
	text:"Nothing happened.",
	dec:["OK"]
}

let s21 = {
	id:"21",
	img:"images/scene17.jpg",
	text:"Sadao thought,'Maybe it's the second night'.",
	dec:["OK"]
}

let s22 = {
	id:"22",
	img:"images/scene18.jpg",
	text:"Nothing happened",
	dec:["OK"]
}

let s23 = {
	id:"23",
	img:"images/scene19.jpg",
	text:"Sadao was sure that it had to be the third night.",
	dec:["OK"]
}

let s24 = {
	id:"24",
	img:"images/scene20.jpg",
	text:"Nothing happened",
	dec:["OK"]
}

let s25 = {
	id:"25",
	img:"images/scene21.jpg",
	text:"Overwhelmed by the strain and responsibilities as a father and husband, he devised a plan to get rid of the soldier himself.",
	dec:["OK"]
}

let s26 = {
	id:"26",
	img:"images/scene22.jpg",
	text:"Sadao bids the man goodbye",
	dec:["OK"]
}

let s27 = {
	id:"27",
	img:"images/scene23.jpg",
	text:"The General had forgotten to keep his promise",
	dec:["OK"]
}

let s28 = {
	id:"28",
	img:"images/scene24.jpg",
	text:"Everything turns back to normal and the soldier was saved",
	dec:["OK"]
}

let s29 = {
	id:"29",
	img:"images/scene25.jpg",						// IMAGE S25 is THE END
	text:"THE END.",
	dec:["OK"]
}


let s30 = {
	id:"30",
	img:"",
	text:"Sorry to see you leave! You may tell us how you felt and what we can do better at abc@email.com",
	dec:["Sure"]
}

let s31 = {
	id:"31",
	img:"images/scene26.jpg",						// IMAGE SCENE 26 is CREDITS 1
	text:"",
	dec:["OK"]
}

let s32 = {
	id:"32",
	img:"images/scene27.jpg",						// IMAGE SCENE 27 is CREDITS 2
	text:"Start Over?",
	dec:["Yes"]
}


let tree = {
	"0": [s1, s30],
	"1": [s2],
	"2": [s3],
	"3": [s4],
	"4": [s5, s30],
	"5": [s6],
	"6": [s7],
	"7": [s8],
	"8": [s9],
	"9": [s10],
	"10":[s11],
	"11":[s12],
	"12":[s13],
	"13":[s14],
	"14":[s15],
	"15":[s16],
	"16":[s17],
	"17":[s18],
	"18":[s19],
	"19":[s20],
	"20":[s21],
	"21":[s22],
	"22":[s23],
	"23":[s24],
	"24":[s25],
	"25":[s26],
	"26":[s27],
	"27":[s28],
	"26":[s29],
	"29":[s31],
	"30":[s31],
	"31":[s32],
	"32":[s5]
};





let currentScene;

function updateScene(decision){
	let possible = tree[currentScene.id];
	let chosen = currentScene.dec.indexOf(decision);

	// scene gets updated here 
	currentScene = possible[chosen];

	updateDOM();
} 
  	
function buttonHandler(){
	let decision = event.srcElement.textContent;
	updateScene(decision);

}

 function init(){
 	// make and initialize the game object 
 	// attach event handlers to each button 
 	currentScene = s0;

 	document.getElementById("decision1").onclick = buttonHandler;
 	document.getElementById("decision2").onclick = buttonHandler;
 	// updateScene();
 	updateDOM();
 }


function updateDOM(){

	document.getElementById("sceneimg").src = currentScene.img;
	document.getElementById("scenetext").innerHTML = currentScene.text;

	if(currentScene.dec[0]){
		document.getElementById("decision1").textContent = currentScene.dec[0];
		document.getElementById("decision1").style.visibility = "visible";
	}else{
		document.getElementById("decision1").style.visibility = "hidden";
	}

	if(currentScene.dec[1]){
		document.getElementById("decision2").textContent = currentScene.dec[1];
		document.getElementById("decision2").style.visibility = "visible";
	}else{
		document.getElementById("decision2").style.visibility = "hidden";
	}
}


init();

