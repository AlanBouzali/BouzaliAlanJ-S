
//Listado de Estudiantes predefinidos.
export const estudiantes = [
    { id: 1, nombre: 'Alan Bou', nota1: 8, nota2: 7, nota3: 7, promedio: 7.33, status: 'Promocionado'},
    { id: 2, nombre: 'Monica Gutierrez', nota1: 8, nota2: 7, nota3: 7, promedio: 7.33, status: 'Promocionado'},
    { id: 3, nombre: 'Camila Astd', nota1: 6, nota2: 7, nota3: 6, promedio: 6.33, status: 'Aprobado'},
    { id: 4, nombre: 'Silvio Garzon', nota1: 6, nota2: 7, nota3: 6, promedio: 6.33, status: 'Aprobado'},
    { id: 5, nombre: 'Gabo Stimer', nota1: 2, nota2: 3, nota3: 5, promedio: 3.33, status: 'Desaprobado'},
    { id: 6, nombre: 'Claudio Perez', nota1: 2, nota2: 3, nota3: 5, promedio: 3.33, status: 'Desaprobado'},
];

//cargo estudiantes en localStorage va a buscar si esta creado. y si no se crea.
JSON.parse( localStorage.getItem( 'estudiantes')) || localStorage.setItem( 'estudiantes', JSON.stringify(estudiantes));
