<?php  
// print_r(PDO::getAvailableDrivers());
	
class Database
{
	private $host = "localhost";
	private $username = "root";
	private $password = "";
	private $db_name = "db_hr";

	public $conn;

	public function getConnection(){
		$this->conn = null;

		// try {
		// 	$this->conn = new PDO('mysql:dbname='.$this->db_name.';host='.$this->host.';user='.$this->username.';password='.$this->password);
		// } catch (PDOException $exception) {
		// 	echo "Connection error: " . $exception->getMessage();
		// }


		try {
		    $this->conn = new PDO("mysql:host=".$this->host.";dbname=".$this->db_name, $this->username, $this->password);
		    // set the PDO error mode to exception
		    $this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
			$this->conn->exec("set names utf8");
		    // echo "Connected successfully"; 
		}
		catch(PDOException $e)
		    {
		    echo "Connection failed: " . $e->getMessage();
		}

		return $this->conn;
	}
}

?>