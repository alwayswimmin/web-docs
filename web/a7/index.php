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
if (!file_exists('time.txt')) {
$time = file_get_contents("time.txt");
echo "<div>This page has been visited last $time.</div>";
}
$time = intval($_POST['time']);
file_put_contents('time.txt', $time . "\n");
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
