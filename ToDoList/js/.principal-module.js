export async function getView(view_name) {
    const view = await fetch(`http://localhost/todolist/views/${view_name}.php`)
    return view.text()
}

export async function getNavbar() {
    const view = await fetch(`http://localhost/todolist/components/navbar.php`)
    return view.text()
}

export async function getTareas() {
    const tareas = await fetch(`http://localhost/todolist/controllers/TareaControllers.php?action=read_userID`, {
        method: 'GET', 
        mode: 'cors'
    })
    return tareas.json()
}

export async function getTarea(ID) {
    const tarea = await fetch(`http://localhost/todolist/controllers/TareaControllers.php?action=read&ID=${ID}`, {
        method: 'GET', 
        mode: 'cors'
    })
    return tarea.json()
}

export async function createTarea(form) {
    await fetch(`http://localhost/todolist/controllers/TareaControllers.php?action=create`, {
        method: 'POST', 
        body: form
    })
}

export async function deleteTarea(ID) {
    await fetch(`http://localhost/todolist/controllers/TareaControllers.php?action=eliminar&ID=${ID}`)
}

export function formatTareas(response, botones) {
    const tareas = []
    response.map (({ID, descripcion, tag, status, fecha_creacion}) => {
        let tarea = `
        <tr>
        <td>${descripcion}</td>
        <td>${tag}</td>
        <td>${status}</td>
        <td>${fecha_creacion}</td>
        
        <td><button class="btn-vertarea" data-id=${ID}>Ver más</button></td>
        <td><button class="btn-editartarea" data-id=${ID}>Editar Tarea</button></td>
        <td><button class="btn-eliminartarea" data-id=${ID}>Eliminar Tarea</button></td>
        <tr>`
        tareas.push(tarea)
    })
    return tareas
}







