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


