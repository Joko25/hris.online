<?php
	include "config.php";

	/**
	* 
	*/
	class Users
	{
		private $table_name = "tbl_users";
		private $conn;
		public $id_user;
		public $username;
		public $password;
		public $akses;

		function __construct($db)
		{
			$this->conn = $db;
		}

		public function getUsers(){
			//$query = "SELECT * FROM ".$this->table_name;

			$query = $this->conn->prepare("SELECT * FROM ".$this->table_name);
			$query->execute();
			//$this->ket_satuan = "SELECT * FROM ".$this->table_name;
			return $query;
		}
	}

	$database = new Database();
	$db = $database->getConnection();

	$users = new Users($db);
	$getusers = $users->getUsers();

	// //$num = $getuom->rowCount();
	// //echo $getuom;

	while ($row = $getusers->fetch(PDO::FETCH_ASSOC)) {
		# code...
		extract($row);
		echo $id_user.' '.$username.' '.$password.'<br/>'; 
		
	}
 ?>