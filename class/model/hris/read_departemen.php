<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
 
// include database and object files
include_once '../../../config/config.php';
include_once '../../controller/class.hris.php';

$database = new Database();
$db = $database->getConnection();

$departemen = new Departemen($db);

$stmt = $departemen->read();
$num = $stmt->rowCount();
$total = $departemen->total();
$data = $total->fetch(PDO::FETCH_NUM);

$result = array();

$result['total'] = $data[0];

if ($num > 0) {
	# code...

	$dept = array();

	while($row = $stmt->fetch(PDO::FETCH_ASSOC)){
		extract($row);
		array_push($dept, $row);
	}

	$result['rows'] = $dept;

	echo json_encode($result);
}else{
	echo json_encode(
        array("message" => "No product found.")
    );
}
?>