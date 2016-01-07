<?php
	$name = $_REQUEST["name"];
	$filename = $name . ".txt";
	if(file_exists($filename)) {
		$data = file_get_contents($filename);
	} else {
		$data = "";
	}
	echo $data;
?>
