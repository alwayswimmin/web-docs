<?php
	$name = $_REQUEST["name"];
	$data = $_REQUEST["data"];
	$filename = $name . ".txt";
	file_put_contents($filename, $data);
?>
