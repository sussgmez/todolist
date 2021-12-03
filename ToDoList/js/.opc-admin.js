export async function getUsers() {
    const usuarios = await fetch(`http://localhost/todolist/controllers/UserControllers.php?action=read_all`, {
        method: 'GET', 
        mode: 'cors'
    })
    return usuarios.json()
}

export async function getUser(ID) {
    const usuario = await fetch(`http://localhost/todolist/controllers/UserControllers.php?action=read&ID=${ID}`, {
        method: 'GET', 
        mode: 'cors'
    })
    return usuario.json()
}

export async function getAllTareas() {
    const tareas = await fetch(`http://localhost/todolist/controllers/TareaControllers.php?action=read_all`, {
        method: 'GET', 
        mode: 'cors'
    })
    return tareas.json()
}

export async function updateTarea(ID, form) {
    await fetch(`http://localhost/todolist/controllers/TareaControllers.php?action=update&ID=${ID}`, {
        method: 'POST', 
        body: form
    })
}

export async function updateUser(ID, form) {
    await fetch(`http://localhost/todolist/controllers/UserControllers.php?action=update&ID=${ID}`, {
        method: 'POST', 
        body: form
    })
}