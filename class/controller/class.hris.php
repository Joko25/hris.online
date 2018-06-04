<?php

class Departemen
{
	private $table_name = "tbl_departemen";
	private $conn;
	public $id_departemen;
	public $departemen_name;
	// public $category_name;
	public $last_update;
	
	function __construct($db)
	{
		# code...
		$this->conn = $db;
	}
	public function total(){
		$query = "SELECT count(*) FROM ".$this->table_name;

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
		$query = "INSERT INTO ".$this->table_name." set departemen_name=:departemen_name, last_update=:last_update";

		$stmt = $this->conn->prepare($query);

		// sanitize
        $this->departemen_name=htmlspecialchars(strip_tags($this->departemen_name));
        $this->last_update=htmlspecialchars(strip_tags($this->last_update));

        // bind values
        $stmt->bindParam(":departemen_name", $this->departemen_name);
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
                    departemen_name = :departemen_name,
                    last_update = :last_update
                WHERE
                    id_departemen = :id_departemen";

        // prepare query statement
        $stmt = $this->conn->prepare($query);

        // sanitize
        $this->id_departemen=htmlspecialchars(strip_tags($this->id_departemen));
        $this->departemen_name=htmlspecialchars(strip_tags($this->departemen_name));
        $this->last_update=htmlspecialchars(strip_tags($this->last_update));

        // bind new values
        $stmt->bindParam(':id_departemen', $this->id_departemen);
        $stmt->bindParam(':departemen_name', $this->departemen_name);
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
        $query = "DELETE FROM " . $this->table_name . " WHERE id_departemen = ?";
     
        // prepare query
        $stmt = $this->conn->prepare($query);
     
        // sanitize
        $this->id_departemen=htmlspecialchars(strip_tags($this->id_departemen));
     
        // bind id of record to delete
        $stmt->bindParam(1, $this->id_departemen);
     
        // execute query
        if($stmt->execute()){
            return true;
        }
     
        return false;
    }
}
?>