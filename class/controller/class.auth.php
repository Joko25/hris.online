<?php  

	/**
	* 
	*/
	class Auth
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

		public function login(){
			//$query = "SELECT * FROM ".$this->table_name;
			$query = "SELECT * FROM " . $this->table_name . " 
                WHERE
                    username = ? and password = ?
                LIMIT
                    0,1";
            $stmt = $this->conn->prepare($query);

	        $stmt->bindParam(1, $this->username);
	        $stmt->bindParam(2, md5($this->password));

	        $stmt->execute();

	        $row = $stmt->fetch(PDO::FETCH_ASSOC);

	        $this->username = $row['username'];
	        $this->password = $row['password'];
	        $this->id_user = $row['id_user'];
			$this->akses = $row['akses'];

			// $query = $this->conn->prepare("SELECT * FROM ".$this->table_name);
			// $query->execute();
			// //$this->ket_satuan = "SELECT * FROM ".$this->table_name;
			// return $query;
		}
	}

?>