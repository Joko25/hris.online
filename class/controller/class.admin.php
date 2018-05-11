<?php  

	/**
	* 
	*/
	class Category
	{
		
		private $table_name = "tbl_category";
		private $conn;
		public $id_category;
		public $category;
		public $category_name;
		public $last_update;
		public $page;
		public $limit;
		// public $akses;

		function __construct($db)
		{
			$this->conn = $db;
		}

		public function total(){
			$query = "SELECT count(*) FROM ".$this->table_name;

			$stmt = $this->conn->prepare($query);

			$stmt->execute();

			return $stmt;
		}

		public function read(){
			$offset = ($this->page-1)*$this->limit;
			$query = "SELECT * FROM ".$this->table_name." order by last_update desc limit ".$this->limit." offset ".$offset;

			$stmt = $this->conn->prepare($query);

			$stmt->execute();

			return $stmt;
		}

		public function create(){
			$query = "INSERT INTO ".$this->table_name." set code_category=:category, category_name=:category_name, last_update=:last_update";

			$stmt = $this->conn->prepare($query);

			// sanitize
	        $this->category=htmlspecialchars(strip_tags($this->category));
	        $this->category_name=htmlspecialchars(strip_tags($this->category_name));
	        $this->last_update=htmlspecialchars(strip_tags($this->last_update));

	        // bind values
	        $stmt->bindParam(":category", $this->category);
	        $stmt->bindParam(":category_name", $this->category_name);
	        $stmt->bindParam(":last_update", $this->last_update);

	        if($stmt->execute()){
	            return true;
	        }else{
	            return false;
	        }
		}
	}

?>