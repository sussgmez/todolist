<?php 

require_once('../config/conexion.php');

class Auth extends Conexion {
    protected $username;
    protected $password;

    public function __construct($user, $pass)
    {
        parent::__construct();
        $this->username = $user;
        $this->password = $pass;
    }

    public function comprobar_usuario() {
        $query = "SELECT * FROM usuarios WHERE username = :username";
        $resultado = $this->conexionBD->prepare($query);
        $resultado->execute(array(":username"=> $this->username));
        
        $userDatos = $resultado->fetchObject();

        if (isset($userDatos->password) && password_verify($this->password, $userDatos->password)){
            return $userDatos;
        }
        else {
            return null;
        }
    }
}

?> 