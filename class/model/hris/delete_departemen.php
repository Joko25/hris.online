<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
date_default_timezone_set('Asia/Jakarta');

// get database connection
include_once '../../../config/config.php';
include_once '../../controller/class.hris.php';
 
// get database connection
$database = new Database();
$db = $database->getConnection();

$departemen = new Departemen($db);

// get posted data
$data = json_decode(file_get_contents("php://input"));

$departemen->id_departemen = $data->id_departemen;

if ($departemen->delete()) {
	# code...
	echo '{';
        echo '"message": "Category was updated."';
    echo '}';
}else{
	echo '{';
        echo '"message": "Unable to update category."';
    echo '}';
}

?>