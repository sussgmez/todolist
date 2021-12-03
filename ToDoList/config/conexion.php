<?php 
    class Conexion {
        protected $conexionBD;
        public function __construct()
        {
            try {
				$this->conexionBD = new PDO("mysql:host=localhost;dbname=to_do_list","root","");
			} catch(Exception $e) {
				
			}
        }
    }

?>