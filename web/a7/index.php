<html>
<head>
	<title>Sun and Moon</title>
</head>
<body>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
	<script type="text/javascript">
		var url = "http://api.usno.navy.mil/rstt/oneday?date=today&loc=Washington,%20DC";
		var data = jQuery.getJSON(url);
	</script>
</body>
</html>
