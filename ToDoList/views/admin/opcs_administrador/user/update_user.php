<div class="container">
    <form id="form-update-usuario">
    <h2>Editar Usuario</h2>

    <h3>Nombre</h3>
    <input id="nombre" class="entry" type="text" name="nomb_c" placeholder="Nombre" required>

    <h3>Apellido</h3>
    <input id="apellido" class="entry" type="text" name="apel_c" placeholder="Apellido" required>

    <h3>Nombre de usuario</h3>
    <input id="username" class="entry" type="text" name="user_c" placeholder="Nombre de usuario" required>
    
    <h3>Correo Electrónico</h3>
    <input id="correo" class="entry" type="text" name="corr_c" placeholder="Correo Electrónico" required>
    
    <h3>Profesión</h3>
    <input id="profesion" class="entry" type="text" name="prof_c" placeholder="Correo Electrónico" required>
    
    <h3>Nivel del usuario</h3>
    <div class="alinear">
        <h4>El nivel actual del usuario es:</h4>
    </div>
    
    
    <select name="role_c">
        <option value="regular">Regular</option>
        <option value="admin">Administrador</option>
    </select>

    <br>

    <button>Modificar Usuario</button>
    </form>
</div>