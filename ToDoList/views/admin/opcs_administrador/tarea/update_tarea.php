<div id="div-tarea">
    <form id="form-update-tarea"> 

        <h2>Editar Tarea</h2>
        <h3>Descripción</h3>
        <input id="descripcion" class="entry" type="text" name="desc_t" placeholder="Descripción">

        <h3>Etiqueta</h3>
        <input id="tag" class="entry" type="text" name="tag_t" placeholder="Etiqueta">

        <h3>Estado</h3>
        <select name="stat_t">
            <option value="Pendiente">Pendiente</option>
            <option value="En proceso">En proceso</option>
            <option value="Finalizada">Finalizada</option>
        </select>

        <h3>Fecha de creación</h3>
        <input id="fecha_creacion" disabled class="entry">

        <h3>Fecha de la última modificación</h3>
        <input id="fecha_modificacion" disabled class="entry" >

        <h3>Asignada por</h3>
        <input id="usuario_creador" disabled class="entry" >

        <h3>Asignado a</h3>
        <input id="usuario_asignado" disabled class="entry">

        <button>Editar Tarea</button>
    </form>
</div>
