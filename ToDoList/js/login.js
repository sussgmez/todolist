import {getView, getNavbar} from 'http://localhost/todolist/js/.principal-module.js'

const header = document.getElementById('header')
const principal_main = document.getElementById('principal-main')

window.onload = () => {
    
    const Auth = async form => {
        await fetch('controllers/AuthControllers.php', {
			method: 'POST',
			body: form
		})
        .then(response => response.text())
        .then(data => {
           
            location.href = data
        })
    }
    
    const show_navbar = () => {
        getNavbar()
        .then(response => {
            header.innerHTML = ""
            header.innerHTML = response
        })
        .then(() => {
            const btn_crearNb = document.getElementById('btn-nav-createAccount')
			const btn_iniciarNb = document.getElementById('btn-nav-iniciar')
            if(btn_crearNb!=null) {
                btn_crearNb.addEventListener('click', show_create_account)
            }
            if(btn_iniciarNb!=null) {
                btn_iniciarNb.addEventListener('click', show_login)
            }
        })
    }

    const show_login = () => {
        getView('login/login')
        .then(response => {
            principal_main.innerHTML = ""
            principal_main.innerHTML = response
        })    
        .then(() => {
            const form_iniciar = document.getElementById('form-login')
            form_iniciar.addEventListener('submit', e=> {
                e.preventDefault()
                const form_Aux = new FormData(form_iniciar)
                Auth(form_Aux)
            })
        })
    }

    const show_create_account = () => {
        getView('login/create_account')
        .then(response => {
            principal_main.innerHTML = ""
            principal_main.innerHTML = response
        })    
    }

    show_navbar()
    show_login()

}