<?php 
    session_start()
?>

<form id="form-create-tarea"> 
    <input type="hidden" name="id_cr" value="<?php echo $_SESSION['usuario']->ID?>">
    <input type="hidden" name="asig_user" value="<?php echo $_SESSION['usuario']->ID?>">

    <h2>Crear Tarea</h2>
    <h3>Descripción</h3>
    <input class="entry" type="text" name="desc_t" placeholder="Descripción">

    <h3>Etiqueta</h3>
    <input class="entry" type="text" name="tag_t" placeholder="Etiqueta">

    </select>
    <br>
    <input class="btn_enviar" type="submit" value="Crear">
</form>
