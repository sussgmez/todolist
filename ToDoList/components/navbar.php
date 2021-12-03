<?php 
    session_start();

    if (!isset($_SESSION['usuario'])){
        echo "<button id='btn-nav-createAccount'>Crear Cuenta</button>";
        echo "<button id='btn-nav-iniciar'>Iniciar Sesión</button>";
    } else {
        echo "<button id='btn-inicio'>Inicio</button>";
        if($_SESSION['usuario']->role=="admin"){
            echo "<button id='btn-admin'>Opciones de Administrador</button>";
        }
    }
?> 
