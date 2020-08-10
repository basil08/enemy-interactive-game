/* 
 * The Game Engine v2.0
 */


// TODO: Crop pictures to perfect size..some are bit offset(courtesy, my sister)
// TODO: Add Description Text to narrate the story 
// TODO: Make Description Text prominent (use CSS)
// TODO: Change Button styling. Current one looks awkward
// TODO: Add Background color (different for adapted story and different for main branch)
// TODO: Poistion Button properly in a div. This one gets off-set weirdly.

let currentScene;

function updateScene(decision) {
	let possible = tree[currentScene.id];
	let chosen = currentScene.dec.indexOf(decision);

	// scene gets updated here 
	currentScene = possible[chosen];

	updateDOM();
}

function buttonHandler(event) {
	let decision = event.srcElement.textContent;
	updateScene(decision);
}

function init() {
	// make and initialize the game object 
	// attach event handlers to each button 
	currentScene = s0;

	document.getElementById("decision1").onclick = buttonHandler;
	document.getElementById("decision2").onclick = buttonHandler;

	updateDOM();
}


function updateDOM() {

	document.getElementById("sceneimg").src = currentScene.img;
	document.getElementById("scenetext").innerHTML = currentScene.text;

	if (currentScene.dec[0]) {
		document.getElementById("decision1").textContent = currentScene.dec[0];
		document.getElementById("decision1").style.visibility = "visible";
	} else {
		document.getElementById("decision1").style.visibility = "hidden";
	}

	if (currentScene.dec[1]) {
		document.getElementById("decision2").textContent = currentScene.dec[1];
		document.getElementById("decision2").style.visibility = "visible";
	} else {
		document.getElementById("decision2").style.visibility = "hidden";
	}
}


init();

