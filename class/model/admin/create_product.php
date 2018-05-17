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

$product = new Product($db);

// get posted data
$data = json_decode(file_get_contents("php://input"));


$product->part_no = $data->part_no;
$product->part_name = $data->part_name;
$product->category = $data->category;
$product->prodfam = $data->prodfam;
$product->description = $data->description;
$product->images = $data->images;
$product->last_update = date('Y-m-d H:i:s');

if ($product->create()) {
	# code...
	echo '{';
        echo '"message": "Product was created."';
    echo '}';
}else{
	echo '{';
        echo '"message": "Unable to create product."';
    echo '}';
}

?>