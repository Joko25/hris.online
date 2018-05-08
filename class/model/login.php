<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Credentials: true");
header('Content-Type: application/json');
 
// include database and object files
include_once '../../config/config.php';
include_once '../controller/class.auth.php';
 
// get database connection
$database = new Database();
$db = $database->getConnection();
 
// prepare product object
$login = new Auth($db);
 
// set ID property of product to be edited
$login->username = isset($_GET['username']) ? $_GET['username'] : die();
$login->password = isset($_GET['password']) ? $_GET['password'] : die();
 
// read the details of product to be edited
$login->login();
 
// create array

if ($login->username != null) {
	# code...
	$status = 'true';
}else{
	$status = 'false';
}

// echo count($login);
$product_arr = array(
    "username" =>  $login->username,
    "password" => $login->password,
    "id_user" => $login->id_user,
    "akses" => $login->akses,
    "status" =>$status
 
);
 
// make it json format
print_r(json_encode($product_arr));
?>