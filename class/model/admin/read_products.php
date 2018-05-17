<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
 
// include database and object files
include_once '../../../config/config.php';
include_once '../../controller/class.admin.php';

$database = new Database();
$db = $database->getConnection();

$product = new Product($db);

$stmt = $product->read();
$num = $stmt->rowCount();
$total = $product->total();
$data = $total->fetch(PDO::FETCH_NUM);

$result = array();

$result['total'] = $data[0];

if ($num > 0) {
	# code...

	$product = array();

	while($row = $stmt->fetch(PDO::FETCH_ASSOC)){
		extract($row);
		array_push($product, $row);
	}

	$result['rows'] = $product;

	echo json_encode($result);
}else{
	echo json_encode(
        array("message" => "No product found.")
    );
}
?>