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
	dec:["Ok"]
};

let s2 = {
	id:"2",
	img:"images/featuring-hana.jpg",
	text:"Hana - Sadao's wife.",
	dec:["Ok"]
}

let s3 = {
	id:"3",
	img:"images/featuring-general.jpg",
	text:"The General - A Japanese WW2 General.",
	dec:["Ok"]
}

let s4 = {
	id:"4",
	img:"featuring-servants.jpg",
	text:"Ready Player One?",
	dec:["Yes","No"]
}

let s5 = {
	id:"5",
	img:"images/scene0.jpg",
	text:"Introduction to Sadao's house",
	dec:["Ok"]
};

let s6 = {
	id:"6",
	img:"images/scene1.jpg",
	text:"",
	dec:["Ok"]
}

let s27 = {
	id:"27",
	img:"",
	text:"Start Over?",
	dec:["Yes"]
}


let tree = {
	s0: [s1, s25],
	s1: [s2],
	s2: [s3],
	s3: [s4],
	s4: [s5, s25],
	s5: [s6],
	s6: [s7],
	s8: [s9],
	s9: [s10],
	s10:[s11],
	s11:[s12],
	s12:[s13],
	s13:[s14],
	s14:[s15],
	s15:[s16],
	s16:[s17],
	s17:[s18],
	s18:[s19],
	s19:[s20],
	s20:[s21],
	s21:[s22],
	s22:[s23],
	s23:[s24],
	s24:[s26],
	s25:[s26],
	s26:[s27],
	s27:[s5]			// start over?
};


