<?php  

	class Category
	{
		
		private $table_name = "tbl_category";
		private $conn;
		public $id_category;
		public $category;
		public $category_name;
		public $last_update;
		// public $page;
		// public $limit;
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

		public function json(){
			// $offset = ($this->page-1)*$this->limit;
			$query = "SELECT code_category, category_name FROM ".$this->table_name." order by last_update desc";

			$stmt = $this->conn->prepare($query);

			$stmt->execute();

			return $stmt;
		}

		public function read(){
			// $offset = ($this->page-1)*$this->limit;
			$query = "SELECT * FROM ".$this->table_name." order by last_update desc";

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

		public function update(){
			// update query code_category = :code_category,
	        $query = "UPDATE
	                    " . $this->table_name . "
	                SET
	                    category_name = :category_name,
	                    last_update = :last_update
	                WHERE
	                    code_category = :category";

	        // prepare query statement
	        $stmt = $this->conn->prepare($query);

	        // sanitize
	        $this->category=htmlspecialchars(strip_tags($this->category));
	        $this->category_name=htmlspecialchars(strip_tags($this->category_name));
	        $this->last_update=htmlspecialchars(strip_tags($this->last_update));

	        // bind new values
	        $stmt->bindParam(':category', $this->category);
	        $stmt->bindParam(':category_name', $this->category_name);
	        $stmt->bindParam(':last_update', $this->last_update);

	        // execute the query
	        if($stmt->execute()){
	            return true;
	        }else{
	            return false;
	        }
		}

		public function delete(){
	        // delete query
	        $query = "DELETE FROM " . $this->table_name . " WHERE code_category = ?";
	     
	        // prepare query
	        $stmt = $this->conn->prepare($query);
	     
	        // sanitize
	        $this->category=htmlspecialchars(strip_tags($this->category));
	     
	        // bind id of record to delete
	        $stmt->bindParam(1, $this->category);
	     
	        // execute query
	        if($stmt->execute()){
	            return true;
	        }
	     
	        return false;
	    }
	}

	class Product
	{
		private $table_name = "tbl_product";
		private $conn;
		public $part_no;
		public $part_name;
		public $category;
		public $prodfam;
		public $description;
		public $images;
		public $last_update;
		
		function __construct($db)
		{
			# code...
			$this->conn = $db;
		}

		public function create(){
			$query = "INSERT INTO ".$this->table_name." set part_no=:part_no, part_name=:part_name, code_category=:category, prodfam=:prodfam, description=:description, image=:images, last_update=:last_update";

			$stmt = $this->conn->prepare($query);

			// sanitize
			$this->part_no = trim($this->part_no);
			$this->part_name = trim($this->part_name);
			$this->category = trim($this->category);
			$this->prodfam = trim($this->prodfam);
			$this->description = trim($this->description);
			$this->images = trim($this->images);
			$this->last_update = trim($this->last_update);
	        // $this->category=htmlspecialchars(strip_tags($this->category));
	        // $this->category_name=htmlspecialchars(strip_tags($this->category_name));
	        // $this->last_update=htmlspecialchars(strip_tags($this->last_update));

	        // bind values
	        $stmt->bindParam(":part_no", $this->part_no);
			$stmt->bindParam(":part_name", $this->part_name);
			$stmt->bindParam(":category", $this->category);
			$stmt->bindParam(":prodfam", $this->prodfam);
			$stmt->bindParam(":description", $this->description);
			$stmt->bindParam(":images", $this->images);
			$stmt->bindParam(":last_update", $this->last_update);


	        if($stmt->execute()){
	            return true;
	        }else{
	            return false;
	        }
		}

		public function update(){
			// update query code_category = :code_category,
	        $query = "UPDATE
	                    " . $this->table_name . "
	                SET part_name=:part_name, code_category=:category, prodfam=:prodfam, description=:description, image=:images, last_update=:last_update
	                WHERE
	                    part_no=:part_no";

	        // prepare query statement
	        $stmt = $this->conn->prepare($query);

	        // sanitize
	       	$this->part_no = trim($this->part_no);
			$this->part_name = trim($this->part_name);
			$this->category = trim($this->category);
			$this->prodfam = trim($this->prodfam);
			$this->description = trim($this->description);
			$this->images = trim($this->images);
			$this->last_update = trim($this->last_update);
	        // $this->category=htmlspecialchars(strip_tags($this->category));
	        // $this->category_name=htmlspecialchars(strip_tags($this->category_name));
	        // $this->last_update=htmlspecialchars(strip_tags($this->last_update));

	        // bind values
	        $stmt->bindParam(":part_no", $this->part_no);
			$stmt->bindParam(":part_name", $this->part_name);
			$stmt->bindParam(":category", $this->category);
			$stmt->bindParam(":prodfam", $this->prodfam);
			$stmt->bindParam(":description", $this->description);
			$stmt->bindParam(":images", $this->images);
			$stmt->bindParam(":last_update", $this->last_update);

	        // execute the query
	        if($stmt->execute()){
	            return true;
	        }else{
	            return false;
	        }
		}

		public function total(){
			$query = "SELECT count(*) FROM ".$this->table_name;

			$stmt = $this->conn->prepare($query);

			$stmt->execute();

			return $stmt;
		}
		public function read(){
			// $offset = ($this->page-1)*$this->limit;
			$query = "SELECT a.part_no, a.part_name, a.code_category, a.description, a.last_update, b.prodfam, b.prodfam_name from tbl_product a left join tbl_prodfam b on a.prodfam = b.prodfam order by a.last_update desc";

			$stmt = $this->conn->prepare($query);

			$stmt->execute();

			return $stmt;
		}

		public function delete(){
	        // delete query
	        $query = "DELETE FROM " . $this->table_name . " WHERE part_no = ?";
	     
	        // prepare query
	        $stmt = $this->conn->prepare($query);
	     
	        // sanitize
	        $this->part_no=htmlspecialchars(strip_tags($this->part_no));
	     
	        // bind id of record to delete
	        $stmt->bindParam(1, $this->part_no);
	     
	        // execute query
	        if($stmt->execute()){
	            return true;
	        }
	     
	        return false;
	    }

	}

	class Prodfam
	{
		private $table_name = "tbl_prodfam";
		private $conn;
		public $prodfam;
		public $prodfam_name;
		public $last_update;
		// public $page;
		// public $limit;
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

		public function json(){
			// $offset = ($this->page-1)*$this->limit;
			$query = "SELECT prodfam, prodfam_name FROM ".$this->table_name." order by last_update desc";

			$stmt = $this->conn->prepare($query);

			$stmt->execute();

			return $stmt;
		}

		public function read(){
			// $offset = ($this->page-1)*$this->limit;
			$query = "SELECT * FROM ".$this->table_name." order by last_update desc";

			$stmt = $this->conn->prepare($query);

			$stmt->execute();

			return $stmt;
		}

		public function create(){
			$query = "INSERT INTO ".$this->table_name." set prodfam=:prodfam, prodfam_name=:prodfam_name, last_update=:last_update";

			$stmt = $this->conn->prepare($query);

			// sanitize
	        $this->prodfam=htmlspecialchars(strip_tags($this->prodfam));
	        $this->prodfam_name=htmlspecialchars(strip_tags($this->prodfam_name));
	        $this->last_update=htmlspecialchars(strip_tags($this->last_update));

	        // bind values
	        $stmt->bindParam(":prodfam", $this->prodfam);
	        $stmt->bindParam(":prodfam_name", $this->prodfam_name);
	        $stmt->bindParam(":last_update", $this->last_update);

	        if($stmt->execute()){
	            return true;
	        }else{
	            return false;
	        }
		}

		public function update(){
			// update query code_category = :code_category,
	        $query = "UPDATE
	                    " . $this->table_name . "
	                SET
	                    prodfam_name = :prodfam_name,
	                    last_update = :last_update
	                WHERE
	                    prodfam = :prodfam";

	        // prepare query statement
	        $stmt = $this->conn->prepare($query);

	        // sanitize
	        $this->prodfam=htmlspecialchars(strip_tags($this->prodfam));
	        $this->prodfam_name=htmlspecialchars(strip_tags($this->prodfam_name));
	        $this->last_update=htmlspecialchars(strip_tags($this->last_update));

	        // bind new values
	        $stmt->bindParam(':prodfam', $this->prodfam);
	        $stmt->bindParam(':prodfam_name', $this->prodfam_name);
	        $stmt->bindParam(':last_update', $this->last_update);

	        // execute the query
	        if($stmt->execute()){
	            return true;
	        }else{
	            return false;
	        }
		}

		public function delete(){
	        // delete query
	        $query = "DELETE FROM " . $this->table_name . " WHERE prodfam = ?";
	     
	        // prepare query
	        $stmt = $this->conn->prepare($query);
	     
	        // sanitize
	        $this->prodfam=htmlspecialchars(strip_tags($this->prodfam));
	     
	        // bind id of record to delete
	        $stmt->bindParam(1, $this->prodfam);
	     
	        // execute query
	        if($stmt->execute()){
	            return true;
	        }
	     
	        return false;
	    }
	}
?>