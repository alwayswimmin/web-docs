<?php
function compare($a,$b){
    return strlen($b)-strlen($a);
}
$pattern=$_REQUEST['regex'];
$contents=file_get_contents('words.txt');
if(preg_match_all( '/' . $pattern . '/m', $contents, $matches)) {
	usort($matches[0],'compare');
	$length = 0;
	$totalstring = ''; 
	foreach($matches[0] as $key => $val) {
		if(strlen($val) == $length) {
			$totalstring .= '<br>' . $val;
		} else {
			$length = strlen($val);
			$totalstring .= '<h4>Strings of Length ' . $length . '</h4>' . $val;
		}
	}
	echo json_encode($totalstring);
}
exit;
?>
