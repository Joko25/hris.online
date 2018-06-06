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
include_once '../../controller/class.admin.php';
 
// get database connection
$database = new Database();
$db = $database->getConnection();

$prodfam = new Prodfam($db);

// get posted data
$data = json_decode(file_get_contents("php://input"));


$prodfam->prodfam = $data->prodfam;
$prodfam->prodfam_name = $data->prodfam_name;
$prodfam->last_update = date('Y-m-d H:i:s');

if ($prodfam->update()) {
	# code...
	echo '{';
        echo '"message": "Prodfam was updated."';
    echo '}';
}else{
	echo '{';
        echo '"message": "Unable to update Prodfam."';
    echo '}';
}

?>