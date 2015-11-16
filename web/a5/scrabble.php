<?php
$pattern=$_REQUEST['regex'];
$contents=file_get_contents('words.txt');
if(preg_match_all( '/' . $pattern . '/m', $contents, $matches)) {
	usort($matches[0],'sort');
	$length = 0;
	foreach($matches[0] as $key => $val) {
		if(strlen($val) == $length) {
			echo json_encode('<br>' . $val);
		} else {
			$length = strlen($val);
			echo json_encode('<h4>Strings of Length ' . $length . '</h4>' . $val);
		}
	}
}
exit;
function sort($a,$b){
    return strlen($b)-strlen($a);
}
?>
