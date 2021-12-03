import {getView} from 'http://localhost/todolist/js/.principal-module.js'
import {getUsers, getUser, updateUser} from 'http://localhost/todolist/js/.opc-admin.js'

export function show_usuarios(principal_main) {
    getView('admin/opcs_administrador/user/users')
    .then(response => {
        principal_main.innerHTML = ""
        principal_main.innerHTML = response
    })
    .then(() => {
        getUsers()
        .then(response => {
            const usuarios = []
            response.map (({ID, username, correo, nombre, apellido, profesion, role}) => {
                let usuario = `
                <tr>
                <td>${username}</td>
                <td>${correo}</td>
                <td>${nombre}</td>
                <td>${apellido}</td>
                <td>${profesion}</td>
                <td>${role}</td>
                <td><button class="btn-verusuario" data-id=${ID}>Ver más</button></td>
                <td><button class="btn-editarusuario" data-id=${ID}>Editar Usuario</button></td>
                <td><button class="btn-eliminarusuario" data-id=${ID}>Eliminar Usuario</button></td>
                <tr>`
                usuarios.push(usuario)
            })
            document.getElementById('div-all-usuarios').innerHTML = usuarios.join("")
        })  

        .then(() => {
            const btns_verusuario = document.getElementsByClassName('btn-verusuario')
            const btns_verusuario_array = [...btns_verusuario]
        

            btns_verusuario_array.map(btn => {
                btn.addEventListener('click', () => {
                    getView('admin/opcs_administrador/user/view_user')
                    .then(response => {
                        principal_main.innerHTML = ""
                        principal_main.innerHTML = response
                    })
                    .then(() => {
                        const id = btn.getAttribute('data-id')
                        getUser(id)
                        .then(data => {
                            const usuario = `
                                <h1>${data.username}</h1>
                                <h1>${data.correo}</h1>
                                <h1>${data.nombre}</h1>
                                <h1>${data.apellido}</h1>
                                <h1>${data.profesion}</h1>
                                <h1>${data.role}</h1>
                            `
                            document.getElementById('div-usuario').innerHTML = usuario
                        })
                    })
                })
            })
        })
        .then(() => {
            const btns_editarusuario = document.getElementsByClassName('btn-editarusuario')
            const btns_editarusuario_array = [...btns_editarusuario]
            btns_editarusuario_array.map(btn => {
                btn.addEventListener('click', () => {
                    getView('admin/opcs_administrador/user/update_user')
                    .then(response => {
                        principal_main.innerHTML = ""
                        principal_main.innerHTML = response
                    })
                    .then(() => {
                        const id = btn.getAttribute('data-id')
                        getUser(id)
                        .then(data => {
                            document.getElementById('nombre').setAttribute('value', data.nombre)
                            document.getElementById('apellido').setAttribute('value', data.apellido)
                            document.getElementById('username').setAttribute('value', data.username)
                            document.getElementById('correo').setAttribute('value', data.correo)
                            document.getElementById('profesion').setAttribute('value', data.profesion)
                        })
                    })
                    .then(() => {
                        const id = btn.getAttribute('data-id')
                        const form_updateUser = document.getElementById('form-update-usuario')
                        form_updateUser.addEventListener('submit', e => {
                            e.preventDefault()
                            const form_Aux = new FormData(form_updateUser)
                            updateUser(id, form_Aux)
                        })
                    })
                })
            })
        })
        .then(() => {
            const btns_eliminarusuario = document.getElementsByClassName('btn-eliminarusuario')
            const btns_eliminarusuario_array = [...btns_eliminarusuario]
            btns_eliminarusuario_array.map(btn => {
                btn.addEventListener('click', () => {
                    deleteUsuario(btn.getAttribute('data-id'))
                    show_home()
                })
            })
        })})
}