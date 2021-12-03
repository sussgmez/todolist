import {getView, getTarea, deleteTarea, formatTareas} from 'http://localhost/todolist/js/.principal-module.js'
import {getAllTareas, updateTarea} from 'http://localhost/todolist/js/.opc-admin.js'

function load_btnvertarea(btn, principal_main) {
    getView('admin/opcs_administrador/tarea/view_tarea')
    .then(response => {
        principal_main.innerHTML = ""
        principal_main.innerHTML = response
    })
    .then(() => {
        const id = btn.getAttribute('data-id')
        getTarea(id)
        .then(data => {
            const tarea = `
            <h1>${data.descripcion}</h1>
            <h1>${data.tag}</h1>
            <h1>${data.status}</h1>
            <h1>${data.fecha_creacion}</h1>
            `
            document.getElementById('div-tarea').innerHTML = tarea
        })
    })
}

function load_btneditartarea (btn, principal_main) {
    getView('admin/opcs_administrador/tarea/update_tarea')
    .then(response => {
        principal_main.innerHTML = ""
        principal_main.innerHTML = response
    })
    .then(() => {
        const id = btn.getAttribute('data-id')
        getTarea(id)
        .then(data => {
            document.getElementById('descripcion').setAttribute('value', data.descripcion)
            document.getElementById('tag').setAttribute('value', data.tag)
            document.getElementById('fecha_creacion').setAttribute('value', data.fecha_creacion)
            document.getElementById('fecha_modificacion').setAttribute('value', data.fecha_modificacion)
            document.getElementById('usuario_creador').setAttribute('value', data.usuario_creador)
            document.getElementById('usuario_asignado').setAttribute('value', data.usuario_asignado)
        })
    })
    .then(() => {
        const id = btn.getAttribute('data-id')
        const form_updateTarea = document.getElementById('form-update-tarea')

        form_updateTarea.addEventListener('submit', () => {
            const form_Aux = new FormData(form_updateTarea)
            updateTarea(id, form_Aux)
        })
    })
}

export function show_tareas(principal_main) {
    getView('admin/opcs_administrador/tarea/tareas')
    .then(response => {
        principal_main.innerHTML = ""
        principal_main.innerHTML = response
    })
    .then(() => {
        getAllTareas()
        .then(response => {
            const tareas = formatTareas(response)
            document.getElementById('div-all-tareas').innerHTML = tareas.join("")
        })  
        .then(() => {
            const btns_vertarea = document.getElementsByClassName('btn-vertarea')
            const btns_vertarea_array = [...btns_vertarea]
            btns_vertarea_array.map(btn => {
                btn.addEventListener('click', () => {
                    load_btnvertarea(btn, principal_main)
                })
            })
        })
        .then(() => {
            const btns_editartarea = document.getElementsByClassName('btn-editartarea')
            const btns_editartarea_array = [...btns_editartarea]
            btns_editartarea_array.map(btn => {
                btn.addEventListener('click', () => {
                    load_btneditartarea(btn, principal_main)
                })
            })
        })
        .then(() => {
            const btns_eliminartarea= document.getElementsByClassName('btn-eliminartarea')
            const btns_eliminartarea_array = [...btns_eliminartarea]
            btns_eliminartarea_array.map(btn => {
                btn.addEventListener('click', () => {
                    deleteTarea(btn.getAttribute('data-id'))
                    show_home()
                })
            })
        })
    })
}