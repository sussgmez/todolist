<?php 
require_once('../models/User.php');

$action = $_GET['action'];

session_start();

function comprobar($datos) {
    $comprobacion = true;
    foreach ($datos as $dato) {
        if (!isset($dato) || $dato=="") {
            $comprobacion=false;
        }
    }    
    return $comprobacion;
}

if ($action=="read_all"){
    $user = new User();
    echo json_encode($user->read_all());
}

if ($action=="read"){
    $user = new User();
    echo json_encode($user->read($_GET['ID']));
}

if ($action == "update") {
    $id = $_GET['ID'];
    $datos =    [":nombre" => $_POST['nomb_c'], 
                ":apellido" => $_POST['apel_c'], 
                ":username" => $_POST['user_c'], 
                ":correo" => $_POST['corr_c'], 
                ":profesion" => $_POST['prof_c'],
                ":role" => $_POST['role_c']
            ];

    $comprobacion = comprobar($datos);

    if ($comprobacion){
        $user = new User();
        $user->update($datos, $id);
    }
}

?>