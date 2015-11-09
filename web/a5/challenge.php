<?php
switch($_REQUEST["action"]) {
	case 'multiply':
		$a= $_REQUEST["first"];
		$b= $_REQUEST["second"];
		echo json_encode(($a * $b));
		exit;
	case 'convertDate':
		$a= $_REQUEST["date1"];
		echo json_encode(str_replace("-","/",$a));
		exit;
	case 'decToBin':
		$a = $_REQUEST["decimal"];
		echo json_encode(decbin($a));
		exit;
}
?>
