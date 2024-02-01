import { estudiantes } from "../dbJS/estudiantes.js";

//tengo que traer userLogin de un div del index.html crear un div
const userLogin = document.getElementById( 'userLogin'); //traemos los usuarios
const listaEstudiantes = document.getElementById( 'compiladorEstudiantes');//traemos los estudiantes a la tabla



//estudiantes de DB le pide al LocalStorage los items que me de 'estudiantes'.
export let estudiantesExistentes = JSON.parse(localStorage.getItem( 'estudiantes'));


document.addEventListener( 'DOMContentLoaded', () =>{

    console.log("estoa aon lao est exist dentro de onaaaaaaaaaaaaaaa");
    console.log(estudiantesExistentes);
    generarListaEstudiantes(estudiantesExistentes)
})

export const generarListaEstudiantes = ( estudiantes) => {
    listaEstudiantes.innerHTML = '';
    estudiantes.forEach( estudiante => {
        let renglon = document.createElement( 'tr');
        
        renglon.innerHTML = `
            <th scope="row">${estudiante.id}</th>
            <td>${estudiante.dni}</td>
            <td>${estudiante.nombre}</td>
            <td>${estudiante.nota1}</td>
            <td>${estudiante.nota2}</td>
            <td>${estudiante.nota3}</td>
            <td>${estudiante.promedio}</td>
            <td>${estudiante.status}</td>
        `;

        listaEstudiantes.appendChild( renglon);

    });
};


//Modal para cargar Estudiantes.

/* if ( document.getElementById( 'btnModalAddEst')) {

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

const agregaEstudiante = document.getElementById( 'btnAddEst');

agregaEstudiante.addEventListener( 'click', () => {
    let dniEstudiante = document.getElementById( 'modalDNI').value;
    let nombreEstudiante = document.getElementById( 'modalNombre').value;
    let modalParcial1 = document.getElementById( 'modalParcial1').value;
    let modalParcial2 = document.getElementById( 'modalParcial2').value;
    let modalParcial3 = document.getElementById( 'modalParcial3').value;



    console.log( 'dni: ' + dniEstudiante);
    console.log( 'nombre: ' + nombreEstudiante);
    console.log( 'Nota Primer Parcial: ' + modalParcial1);
    console.log( 'Nota Primer Parcia2: ' + modalParcial2);
    console.log( 'Nota Primer Parcia3: ' + modalParcial3);
    alert( dniEstudiante + nombreEstudiante + modalParcial1 + modalParcial2 + modalParcial3)
}) */

// Fin modal