import { estudiantes } from "../dbJS/estudiantes.js";

//tengo que traer userLogin de un div del index.html crear un div
const userLogin = document.getElementById( 'userLogin'); //traemos los usuarios
const listaEstudiantes = document.getElementById( 'compiladorEstudiantes');//traemos los estudiantes a la tabla

console.log('que lee primero?');

//estudiantes de DB le pide al LocalStorage los items que me de 'estudiantes'.
export let estudiantesExistentes = JSON.parse(localStorage.getItem( 'estudiantes'));


document.addEventListener( 'DOMContentLoaded', () =>{
    console.log(estudiantesExistentes);
    if (estudiantesExistentes === null){
        cargarEstudiantesDesdeLocalStorage();
    } else{
        generarListaEstudiantes(estudiantesExistentes);
    }
});


const cargarEstudiantesDesdeLocalStorage = () => {
    estudiantesExistentes = JSON.parse(localStorage.getItem('estudiantes'));
    
    if (estudiantesExistentes === null){
        console.log('no se encontraron estudiantes en el LocalSstorage');
    } else{
        generarListaEstudiantes(estudiantesExistentes);
        console.log(estudiantesExistentes);
    }
}

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


