<?php
$db = new SQLite3('form_data.db') or die('Unable to open database');
$query = <<<EOD
  CREATE TABLE IF NOT EXISTS data (
    user STRING PRIMARY KEY,
    email STRING,
    city STRING,
    state STRING,
    zip STRING,
    date STRING)
EOD;
$db->exec($query) or die('Create db failed');
ECHO 'hi';
// $name = sanitize($_POST['name']);
// $email = sanitize($_POST['email']);
// $city = sanitize($_POST['city']);
// $state = sanitize($_POST['state']);
// $zip = sanitize($_POST['zip']);
// $date = sanitize($_POST['date']);
$name = ($_REQUEST['name']);
$email = ($_REQUEST['email']);
$city = ($_REQUEST['city']);
$state = ($_REQUEST['state']);
$zip = ($_REQUEST['zip']);
$date = ($_REQUEST['date']);
ECHO $email;
ECHO 'hi again';
$query = <<<EOD
  INSERT INTO data VALUES ( '$name', '$email', '$city', '$state', '$zip', '$date' )
EOD;
$db->exec($query) or die("Unable to add $name");
$result = $db->query('SELECT * FROM data') or die('Query failed');
while ($row = $result->fetchArray())
{
  echo "Name: {$row['user']}\nEmail: {$row['email']}\nCity: {$row['city']}\nState: {$row['state']}\nZip Code: {$row['zip']}\nDate: {$row['date']}\n";
}
?>
