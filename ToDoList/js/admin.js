import {getView, getNavbar, getTareas, createTarea, getTarea, deleteTarea, formatTareas} from 'http://localhost/todolist/js/.principal-module.js'
import {show_tareas} from 'http://localhost/todolist/js/.admin-tareas.js'
import {show_usuarios} from 'http://localhost/todolist/js/.admin-users.js'

const header = document.getElementById('header')
const principal_main = document.getElementById('principal-main')

window.onload = () => {
    
    const show_view_admin = () => {
        getView('admin/opcs_administrador/opciones')
        .then(response => {
            principal_main.innerHTML = ""
            principal_main.innerHTML = response
        })
        .then(() => {
            const btn_verusuarios = document.getElementById('btn-verusuarios')
            const btn_vertareas = document.getElementById('btn-vertareas')
            btn_vertareas.addEventListener('click', () => {
                show_tareas(principal_main)
            })
            btn_verusuarios.addEventListener('click', () => {
                show_usuarios(principal_main)
            })
        })
    }
    
    const show_navbar = () => {
        getNavbar()
        .then(response => {
            header.innerHTML = ""
            header.innerHTML = response
        })
        .then(() => {
            document.getElementById('btn-inicio').addEventListener('click', show_home)
            if (document.getElementById('btn-admin')!=null){
                const btn_admin = document.getElementById('btn-admin')
                btn_admin.addEventListener('click', () => {
                    show_view_admin()
                })
            }
        })
    }

    const show_create_simple = () => {
        getView('admin/tarea/create_simple')
        .then(response => {
            principal_main.innerHTML = ""
            principal_main.innerHTML = response
        })
        .then(() => {
            const form_createTarea = document.getElementById('form-create-tarea')
            form_createTarea.addEventListener('submit', () => {
                const form_Aux = new FormData(form_createTarea)
                createTarea(form_Aux)
            })
        })
    }

    const show_home = () => {
        getView('admin/home/home')
        .then(response => {
            principal_main.innerHTML = ""
            principal_main.innerHTML = response
        })
        .then(() => {
            const div_tareas = document.getElementById('div-tareas')
            getTareas()
            .then(response => {
                const tareas = formatTareas(response)
                div_tareas.innerHTML = tareas.join("")
            })
            .then(() => {
                const btns_vertarea = document.getElementsByClassName('btn-vertarea')
                const btns_vertarea_array = [...btns_vertarea]
                btns_vertarea_array.map(btn => {
                    btn.addEventListener('click', () => {
                        getView('admin/tarea/view_simple')
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
                    })
                })
            })
            .then(() => {
                const btns_editartarea = document.getElementsByClassName('btn-editartarea')
                const btns_editartarea_array = [...btns_editartarea]
                btns_editartarea_array.map(btn => {
                btn.addEventListener('click', () => {
                    //
                })
            })
            })
            .then(() => {
                const btns_eliminartarea = document.getElementsByClassName('btn-eliminartarea')
                const btns_eliminartarea_array = [...btns_eliminartarea]
                btns_eliminartarea_array.map(btn => {
                    btn.addEventListener('click', () => {
                        deleteTarea(btn.getAttribute('data-id'))
                        show_home()
                    })
                })
            })
            .then(() => {
                const btn_anadir = document.getElementById('btn-anadir')
                btn_anadir.addEventListener('click', () => {
                    show_create_simple()
                })
            })
        })
    }

    show_navbar()
    show_home()
}