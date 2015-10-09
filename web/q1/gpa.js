function upd() {
	var q1 = document.getElementById("q1");
	var q2 = document.getElementById("q2");
	var gpa = document.getElementById("gpa");
	var g1 = q1.options[q1.selectedIndex].value;
	var g2 = q2.options[q2.selectedIndex].value;
	var gpa1, gpa2;
	if(g1 == "A") gpa1 = 4;
	if(g1 == "B") gpa1 = 3;
	if(g1 == "C") gpa1 = 2;
	if(g1 == "D") gpa1 = 1;
	if(g1 == "F") gpa1 = 0;
	if(g2 == "A") gpa2 = 4;
	if(g2 == "B") gpa2 = 3;
	if(g2 == "C") gpa2 = 2;
	if(g2 == "D") gpa2 = 1;
	if(g2 == "F") gpa2 = 0;
	var ave = (gpa1 + gpa2)	/ 2;
	gpa.innerHTML = ave;
}
