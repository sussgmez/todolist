<?php 
require_once('../models/Auth.php');

if (isset($_POST['user_login'], $_POST['pass_login'])){
    $auth = new Auth($_POST['user_login'], $_POST['pass_login']);
    $userDatos = $auth->comprobar_usuario();
    if ($userDatos!=null) {
        session_start();
        $_SESSION['usuario'] = $userDatos;
        if ($_SESSION['usuario']->role == "regular") {
            echo "http://localhost/todolist/views/regular/regular.php";
        } 
        else if ($_SESSION['usuario']->role == "admin") {
            echo "http://localhost/todolist/views/admin/admin.php";
        } 
    }
}

?>