var gamerunning = 0;
var score = 0;
var states = [
"Alabama",
"Alaska",
"Arizona",
"Arkansas",
"California",
"Colorado",
"Connecticut",
"Delaware",
"Florida",
"Georgia",
"Hawaii",
"Idaho",
"Illinois",
"Indiana",
"Iowa",
"Kansas",
"Kentucky",
"Louisiana",
"Maine",
"Maryland",
"Massachusetts",
"Michigan",
"Minnesota",
"Mississippi",
"Missouri",
"Montana",
"Nebraska",
"Nevada",
"New Hampshire",
"New Jersey",
"New Mexico",
"New York",
"North Carolina",
"North Dakota",
"Ohio",
"Oklahoma",
"Oregon",
"Pennsylvania",
"Rhode Island",
"South Carolina",
"South Dakota",
"Tennessee",
"Texas",
"Utah",
"Vermont",
"Virginia",
"Washington",
"West Virginia",
"Wisconsin",
"Wyoming"
];
var capitals = [
"Montgomery",
"Juneau",
"Phoenix",
"Little Rock",
"Sacramento",
"Denver",
"Hartford",
"Dover",
"Tallahassee",
"Atlanta",
"Honolulu",
"Boise",
"Springfield",
"Indianapolis",
"Des Moines",
"Topeka",
"Frankfort",
"Baton Rouge",
"Augusta",
"Annapolis",
"Boston",
"Lansing",
"St. Paul",
"Jackson",
"Jefferson City",
"Helena",
"Lincoln",
"Carson City",
"Concord",
"Trenton",
"Santa Fe",
"Albany",
"Raleigh",
"Bismarck",
"Columbus",
"Oklahoma City",
"Salem",
"Harrisburg",
"Providence",
"Columbia",
"Pierre",
"Nashville",
"Austin",
"Salt Lake City",
"Montpelier",
"Richmond",
"Olympia",
"Charleston",
"Madison",
"Cheyenne"
]
var stats = [
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
];
var curr;
var timerfunc;
function endGame() {
	document.getElementById("forfeit").disabled = true;
	alert("Game Over");
	clearInterval(timerfunc);
	gamerunning = 0;
	document.getElementById("skip").disabled = true;
	if(states.length != score)
		document.getElementById("answers").innerHTML += "<br><br>You forgot:";
	for(var i = 0; i < states.length; ++i) {
		if(stats[i] == 0) {
			document.getElementById("answers").innerHTML += "<br>" + states[i] + ": " + capitals[i];
		}
	}
}
function onStart() {
	document.getElementById("forfeit").disabled = true;
	document.getElementById("skip").disabled = true;
}
function next() {
	var remaining = states.length - score;
	var index = Math.floor((Math.random() * remaining));
	for(curr = 0; curr < states.length; ++curr) {
		if(stats[curr] == 1) continue;
		if(index == 0) {
			break;
		}
		--index;
	}
	document.getElementById("query").innerHTML = states[curr];
}
function startTimer() {
	document.getElementById("start").disabled = true;
	document.getElementById("userinput").value = "";
	document.getElementById("forfeit").disabled = false;
	document.getElementById("skip").disabled = false;
	gamerunning = 1;
	next();
	document.getElementById("userinput").focus();
	timerfunc = setInterval(function() {
		if(gamerunning == 0) clearInterval(timerfunc);
		var timer = document.getElementById("timer");
		var time = parseInt(timer.innerHTML);
		time = time - 1;
		if(time >= 0) {
			timer.innerHTML = time;
		}
		if(time == 0) {
			endGame();
		}
	}, 1000);
}
function skip() {
	next();
	document.getElementById("userinput").focus();
}
function reset() {
	gamerunning = 0;
	clearInterval(timerfunc);
	score = 0;
	document.getElementById("score").innerHTML = score;
	for(var i = 0; i < states.length; i++) {
		stats[i] = 0;
	}
	document.getElementById("query").innerHTML = "";
	document.getElementById("timer").innerHTML = "300";
	document.getElementById("userinput").value = "";
	document.getElementById("score").innerHTML = score;
	document.getElementById("answers").innerHTML = "Your answers:";
	document.getElementById("start").disabled = false;
	document.getElementById("forfeit").disabled = true;
	document.getElementById("skip").disabled = true;
}
function checkAnswer() {
	if(gamerunning == 1) {
		var input = document.getElementById("userinput").value;
		if(input == capitals[curr]) {
			stats[curr] = 1;
			score++;
			document.getElementById("score").innerHTML = score;
			document.getElementById("answers").innerHTML += "<br>" + states[curr] + ": " + capitals[curr];
			document.getElementById("userinput").value = "";
			if(score != states.length)
				next();
		}
		if(score == states.length) {
			alert("Congratulations!");
			gamerunning = 0;
			clearInterval(timerfunc);
		}
	}
}
