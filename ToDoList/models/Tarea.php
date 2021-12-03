<?php 
require_once('../config/conexion.php');

class Tarea extends Conexion {

    public function __construct() {
        parent::__construct();
    }

    public function read_userID($userID) {
        $query = "SELECT * FROM tareas WHERE usuario_asignado=" . $userID;
        $resultado = $this->conexionBD->prepare($query);
        $resultado->execute();

        return $resultado->fetchAll();
    }

    public function create($datosArray) {
        $query = "INSERT INTO tareas (descripcion, tag, status, fecha_creacion, fecha_modificacion, usuario_asignado, usuario_creador) VALUES 
        (:descripcion, :tag, :status, :fecha_creacion, :fecha_modificacion, :usuario_asignado, :usuario_creador)";
        $resultado = $this->conexionBD->prepare($query);
        $resultado->execute($datosArray);
    }

    public function read($ID) {
        $query = "SELECT * FROM tareas WHERE ID=" . $ID;
        $resultado = $this->conexionBD->prepare($query);
        $resultado->execute();

        return $resultado->fetch();
    }

    public function read_all() {
        $query = "SELECT * FROM tareas";
        $resultado = $this->conexionBD->prepare($query);
        $resultado->execute();

        return $resultado->fetchAll();
    }

    public function completar($ID) {
        $query= "UPDATE `tareas` SET status='Finalizada' WHERE ID=" . $ID;
        $resultado = $this->conexionBD->prepare($query);
        $resultado->execute();
    }

    public function delete($ID) {
        $query = "DELETE FROM tareas WHERE ID=" . $ID;
        $resultado = $this->conexionBD->prepare($query);
        $resultado->execute();
    }

    public function update($datosArray, $id) {
        $query= "UPDATE `tareas` SET descripcion=:descripcion,tag=:tag,
        status=:status,fecha_modificacion=:fecha_modificacion WHERE ID=" . $id;

        $resultado = $this->conexionBD->prepare($query);
        $resultado->execute($datosArray);
    }


}

?>