<?php 
require_once('../config/conexion.php');

class User extends Conexion {
    public function __construct() {
        parent::__construct();
    }

    public function read_all() {
        $query = "SELECT * FROM usuarios";
        $resultado = $this->conexionBD->prepare($query);
        $resultado->execute();

        return $resultado->fetchAll();
    }
    
    public function read($ID) {
        $query = "SELECT * FROM usuarios WHERE ID=" . $ID;
        $resultado = $this->conexionBD->prepare($query);
        $resultado->execute();

        return $resultado->fetch();
    }

    public function update($datosArray, $id) {
        $query= "UPDATE `usuarios` SET correo=:correo,username=:username,
        nombre=:nombre,apellido=:apellido,
        profesion=:profesion, role=:role WHERE ID=" . $id;

        $resultado = $this->conexionBD->prepare($query);
        $resultado->execute($datosArray);
    }


}
?>