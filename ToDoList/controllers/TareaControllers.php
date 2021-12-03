<?php 
require_once('../models/Tarea.php');

$action = $_GET['action'];

session_start();

if ($action=="read_userID"){
    $tarea = new Tarea();
    echo json_encode($tarea->read_userID($_SESSION['usuario']->ID));
}

if ($action=="read"){
    $tarea = new Tarea();
    echo json_encode($tarea->read($_GET['ID']));
}

if ($action=="read_all"){
    $tarea = new Tarea();
    echo json_encode($tarea->read_all());
}

if ($action=='create'){
    $datos = [
        ":descripcion" => $_POST['desc_t'],
        ":tag" => $_POST['tag_t'],
        ":status" => 'Pendiente',
        ":fecha_creacion" => date("Y-m-d"),
        ":fecha_modificacion" => date("Y-m-d"),
        
        ":usuario_asignado" => $_POST['asig_user'],
        ":usuario_creador" => $_POST['id_cr']
    ];

    $comprobacion = true;
    foreach ($datos as $dato) {
        if (!isset($dato) || $dato=="") {
            $comprobacion=false;
        }
    }
    
    if ($comprobacion){
        $tarea = new Tarea();
        $tarea->create($datos);
    }
}

if ($action=='update') {
    $id = $_GET['ID'];
    $datos = [
        ":descripcion" => $_POST['desc_t'],
        ":tag" => $_POST['tag_t'],
        ":status" => $_POST['stat_t'],
        ":fecha_modificacion" => date("Y-m-d")
    ];
    $comprobacion = true;
    foreach ($datos as $dato) {
        if (!isset($dato) || $dato=="") {
            $comprobacion=false;
        }
    }

    if ($comprobacion){
        $tarea = new Tarea();
        $tarea->update($datos, $id);
    }
}


if ($action=="completar"){
    $tarea = new Tarea();
    $tarea->completar($_GET['ID']);
}

if ($action=="eliminar"){
    $tarea = new Tarea();
    $tarea->delete($_GET['ID']);
}

?>