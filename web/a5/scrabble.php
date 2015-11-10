<?php
$pattern=$_REQUEST["regex"];
$contents=file_get_contents("words.txt");
if(preg_match_all( '/' . $pattern . '/m', $contents, $matches)) {
	echo json_encode(implode("<br>", $matches[0]));
}
exit;
?>
