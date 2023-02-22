
<?php
$serv = "localhost";
$user = "root";
$pass = "";
$name = "users_db";

$con = mysqli_connect($serv, $user,$pass,$name);

if(!$con){
 die("Connection failed: " . mysqli_connect_error());
}

?>
