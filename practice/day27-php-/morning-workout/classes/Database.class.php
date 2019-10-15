<?php

class Database
{
    private $db_address = 'localhost';
    private $db_user = 'root';
    private $db_pass = '';
    private $db_name = 'games';
    private $connection;

    //	CONSTRUCT
    public function __construct()
    {
        $this->connect();
    }

    //	HELPERS
    public function esc($input)
    {
        return $this->connection->real_escape_string($input);
    }

    //	DB FUNCTIONS
    public function connect()
    {
        $this->connection = new mysqli($this->db_address, $this->db_user, $this->db_pass, $this->db_name);

        if ($this->connection) {
            $this->connection->select_db($this->db_name);
            /* echo "You connected!"; */

            /* 
            *
            *   IMPORTANT!!!
            *   --> SET NAMES UTF8 (SEE BELOW!!!)
            *
            */

            $stmt = $this->connection->prepare('SET NAMES UTF8');
            $stmt->execute();
        }
    }

    public function read($table, $orderby = null, $way = null)
    {
        $esc_table = $this->esc($table);

        $sql = "SELECT * FROM $esc_table ";

        if ($orderby !== null) {
            $sql .= "ORDER BY {$orderby} ";
        }

        if ($way !== null) {
            $sql .= "{$way}";
        }

        $stmt = $this->connection->prepare($sql);
        $stmt->execute();
        $result = $stmt->get_result();

        $output = [];

        $i = 0;
        while ($row = $result->fetch_assoc()) {
            $output[$i] =
                array(
                    'id' => $row['id'],
                    'name' => substr($row['name'], 0, 32) . "...",
                    'img' => $row['image_url'],
                    'rating' => $row['rating'],
                    'description' => substr($row['description'], 0, 128) . "..."
                );
            $i++;
        }
        return $output;
    }
}
