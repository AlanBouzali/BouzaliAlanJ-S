


const userLogin = document.getElementById( 'userLogin'); //traemos los usuarios
const listaEstudiantes = document.getElementById( 'compiladorEstudiantes');//traemos los estudiantes a la tabla

//estudiantes de DB le pide al LocalStorage los items que me de 'estudiantes'.
let estudiantesExistentes = JSON.parse(localStorage.getitem( 'estudiantes'));

document.addEventListener( 'DOMContentLoaded', () =>{
    generarListaEstudiantes( estudiantesExistentes)
})

const generarListaEstudiantes = ( estudiantes) => {
    estudiantes.forEach( estudiante =>{
        
        let renglon = document.createElement( 'tr');

        //renglon.className = 'estudiante';
        renglon.innerHTML = `
            <th scope="row">${estudiante.id}</th>
            <td>${estudiante.nombre}</td>
            <td>${estudiante.nota1}</td>
            <td>${estudiante.nota1}</td>
            <td>${estudiante.nota1}</td>
            <td>${estudiante.promedio}</td>
            <td>${estudiante.status}</td>
        `;

        listaEstudiantes.appendChild( renglon);
    });
};
