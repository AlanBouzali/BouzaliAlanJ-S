const btnRegister = document.getElementById( 'btnRegister');
const formRegister = document.getElementById( 'userRegister');
const formLogin = document.getElementById( 'userLogin');
const btnLogin = document.getElementById( 'btnLogin');

let usuarios = JSON.parse(localStorage.getItem("dBusuarios"))


class newUser {
    constructor ( user, pass) {
        this.id = usuarios.length + 1;
        this.user = user;
        this.pass = pass;
        this.admin = false;
    }
}

btnLogin.addEventListener( 'click', ( e) => {
    e.preventDefault()

    const user = formLogin.children[0].children[1].value;
    const pass = formLogin.children[1].children[1].value;

    validarYloguear ( user, pass);

    
})

const validarYloguear = ( user, pass) => {

    const usuarioExistente = usuarios.find(( usuario) => usuario.user === user);
    if ( usuarioExistente === undefined || usuarioExistente.pass !== pass) {
        alert( 'Error en usuario o contraseña');
    } else {
        alert( 'Bienvenido ${usuario}');

        let usuario = {
            user: usuarioExistente.user,
            pass: usuarioExistente.pass,
            admin: usuarioExistente.admin
        }

        sessionStorage.setItem( 'usuario', JSON.stringify( usuario));

    }
}