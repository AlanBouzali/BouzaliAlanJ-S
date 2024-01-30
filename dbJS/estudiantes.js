
import { renderNuevoEstudiante } from "./planillaEstudiantes.js";

//Listado de Estudiantes predefinidos.
export const estudiantes = [
    { id: 1, documento: '365714', nombre: 'Alan Bou', nota1: 8, nota2: 7, nota3: 7, promedio: 7.33, status: 'Promocionado'},
    { id: 2, documento: '256571', nombre: 'Monica Gutierrez', nota1: 8, nota2: 7, nota3: 7, promedio: 7.33, status: 'Promocionado'},
    { id: 3, documento: '431228', nombre: 'Camila Astd', nota1: 6, nota2: 7, nota3: 6, promedio: 6.33, status: 'Aprobado'},
    { id: 4, documento: '305973', nombre: 'Silvio Garzon', nota1: 6, nota2: 7, nota3: 6, promedio: 6.33, status: 'Aprobado'},
    { id: 5, documento: '224318', nombre: 'Gabo Stimer', nota1: 2, nota2: 3, nota3: 5, promedio: 3.33, status: 'Desaprobado'},
    { id: 6, documento: '196754', nombre: 'Claudio Perez', nota1: 2, nota2: 3, nota3: 5, promedio: 3.33, status: 'Desaprobado'},
];



/* estudiantes.documento = nuevoDni;
estudiantes.nombre = nuevoModalNombre;
estidiantes.nota1 = NuevoParcial1;
estidiantes.nota2 = NuevoParcial2;
estidiantes.nota3 = NuevoParcial3; */

//cargo estudiantes en localStorage va a buscar si esta creado. y si no, se crea.
JSON.parse( localStorage.getItem( 'estudiantes')) || localStorage.setItem( 'estudiantes', JSON.stringify(estudiantes));


//agregar los estudiantes renderizados a la lista de estudiantes existente.
const nuevoEstudiante = renderNuevoEstudiante;
estudiantes.push(nuevoEstudiante);

localStorage.setItem( 'estudiantes', JSON.stringify( estudiantes));