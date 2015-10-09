
var gamerunning = 0;
var score = 0;
var ans = [
	"Donald Trump",
	"Ben Carson",
	"Jeb Bush",
	"Marco Rubio",
	"Ted Cruz",
	"Rand Paul",
	"Mike Huckabee",
	"John Kasich",
	"Scott Walker",
	"Carly Fiorina",
	"Rick Perry",
	"Chris Christie",
	"Bobby Jindal",
	"Rick Santorum",
	"George Pataki",
	"Lindsey Graham",
	"Jim Gilmore"
];
var stats = [
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
];
var timerfunc;
function endGame() {
	document.getElementById("forfeit").disabled = true;
	alert("Game Over");
	gamerunning = 0;
	document.getElementById("answers").innerHTML += "<br><br>You forgot:";
	for(var i = 0; i < ans.length; ++i) {
		if(stats[i] == 0) {
			document.getElementById("answers").innerHTML += "<br>" + ans[i];
		}
	}
}
function onStart() {
	document.getElementById("forfeit").disabled = true;
}
function startTimer() {
	document.getElementById("start").disabled = true;
	document.getElementById("userinput").value = "";
	document.getElementById("forfeit").disabled = false;
	gamerunning = 1;
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
function reset() {
	gamerunning = 0;
	clearInterval(timerfunc);
	score = 0;
	document.getElementById("score").innerHTML = score;
	for(var i = 0; i < ans.length; i++) {
		stats[i] = 0;
	}
	document.getElementById("timer").innerHTML = "120";
	document.getElementById("userinput").value = "";
	document.getElementById("score").innerHTML = score;
	document.getElementById("answers").innerHTML = "Your answers:";
	document.getElementById("start").disabled = false;
	document.getElementById("forfeit").disabled = true;
}
function checkAnswer() {
	if(gamerunning == 1) {
		var input = document.getElementById("userinput").value;
		var index = ans.indexOf(input);
		if(index != -1 && stats[index] == 0) {
			stats[index] = 1;
			score++;
			document.getElementById("score").innerHTML = score;
			document.getElementById("answers").innerHTML += "<br>" + input;
			document.getElementById("userinput").value = "";
		}
		if(score == ans.length) {
			alert("Congratulations!");
			gamerunning = 0;
			clearInterval(timerfunc);
		}
	}
}
