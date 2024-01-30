

const userLogin = document.getElementById( 'userLogin'); //traemos los usuarios
const listaEstudiantes = document.getElementById( 'compiladorEstudiantes');//traemos los estudiantes a la tabla

//estudiantes de DB le pide al LocalStorage los items que me de 'estudiantes'.
export let estudiantesExistentes = JSON.parse(localStorage.getItem( 'estudiantes'));

document.addEventListener( 'DOMContentLoaded', () =>{
    generarListaEstudiantes( estudiantesExistentes)
})

const generarListaEstudiantes = ( estudiantes) => {
    estudiantes.forEach( estudiante => {
        
        let renglon = document.createElement( 'tr');

        //renglon.className = 'estudiante';
        renglon.innerHTML = `
            <th scope="row">${estudiante.id}</th>
            <td>${estudiante.documento}</td>
            <td>${estudiante.nombre}</td>
            <td>${estudiante.nota1}</td>
            <td>${estudiante.nota2}</td>
            <td>${estudiante.nota3}</td>
            <td>${estudiante.promedio}</td>
            <td>${estudiante.status}</td>
        `;

        listaEstudiantes.appendChild( renglon);

        //const agregarEstudiante = document.getElementById( 'btnModalAddEst');
        //agregarEstudiante.addEventListener( 'click', () => console.log( 'agrega estudiante'));
    });
};


//Modal para cargar Estudiantes.

if ( document.getElementById( 'btnModalAddEst')) {

    let modal = document.getElementById( 'myModal');
    let button = document.getElementById( 'btnModalAddEst');
    let span = document.getElementsByClassName( 'close')[0];
    let body = document.getElementsByTagName( 'body');

    button.onclick = function () {
        modal.style.display = 'block';
        body.style.position = 'static';
        body.style.height = '100%';
        body.style.overflow = 'hidden';
    }

    span.onclick = function () {
        modal.style.display = 'none';
        body.style.position = 'inherit';
        body.style.height = 'auto';
        body.style.overflow = 'visible';
    }
}
// Fin modal