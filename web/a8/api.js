$("#form").submit(function(e){
	var station = $("#stat").val();
	$.getJSON("http://api.usno.navy.mil/rstt/oneday?date=today&loc=" + station, function(data){
		var rise = (data.sundata[2]).time;
		var set = (data.sundata[4]).time;
		$("#rise").text(rise);
		$("#set").text(set);
	});
	e.preventDefault();
});
