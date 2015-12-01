<html>
<head>
	<title>Keep Count</title>
	<style type = "text/css">
		div {
			background-color:green;
		}
	</style>
</head>
<body>
	<?php
		$filename = "visit_count.txt";
		if(file_exists($filename)) {
			$count = intval(file_get_contents($filename)) + 1;
		} else {
			$count = 1;
		}
		echo "<div>This page has been visited $count time" . ($count != 1 ? "s" : "") . ".</div>";
		file_put_contents($filename, $count);
	?>
</body>
</html>
