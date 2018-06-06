<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
 
// include database and object files
include_once '../../../config/config.php';
include_once '../../controller/class.admin.php';

$database = new Database();
$db = $database->getConnection();

$prodfam = new Prodfam($db);

// $category->page = isset($_GET['page']) ? $_GET['page'] : die();
// $category->limit = isset($_GET['limit']) ? $_GET['limit'] : die();

// echo $login->offset;
$stmt = $prodfam->read();
$num = $stmt->rowCount();
$total = $prodfam->total();
$data = $total->fetch(PDO::FETCH_NUM);

$result = array();

$result['total'] = $data[0];

if ($num > 0) {
	# code...

	$prodfams = array();

	while($row = $stmt->fetch(PDO::FETCH_ASSOC)){
		extract($row);
		array_push($prodfams, $row);
	}

	$result['rows'] = $prodfams;

	echo json_encode($result);
}else{
	echo json_encode(
        array("message" => "No Prodfam found.")
    );
}
?>