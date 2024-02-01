import { estudiantesExistentes } from './inicio.js';
import { generarListaEstudiantes } from './inicio.js';
/* import { estudiantes } from '../dbJS/estudiantes.js'; */


let estudiantesActuales = JSON.parse( localStorage.getItem( 'estudiantes'));
//buscador de estudiantes.
const buscador = document.getElementById( 'buscadorInput');


const validarNombre = () => {
    if ( nombreEstudiante.length >=3) {
        nombreEstudiante = true;
    } else {
        return false;
        //console.log( 'Verifique el nombre del estudiante.')
    }
}

const validarNota = ( numero) => {
    if ( !(numero >= 1 && numero <= 10 && !isNaN( numero))) {
        console.log( 'La nota ingresada no es válida.')
    }
}
const verificarEstado = ( valorPromedio) => {
    if( valorPromedio <4) {
        return 'Desaprobado';
    } else if(( valorPromedio >=4) && ( valorPromedio <7)){
        return 'Aprobado';
    } else if( valorPromedio >7) {
        return 'Promocionado';
    } else {
        return 'Falla en el cálculo del promedio';
    }
}

export class EstudianteCreado {
    constructor( dniEstudiante, nombreEstudiante, modalParcial1, modalParcial2, modalParcial3) {
        this.id = estudiantesActuales.length + 1;
        this.dni = dniEstudiante;
        this.nombre = nombreEstudiante;
        this.nota1 = modalParcial1;
        this.nota2 = modalParcial2;
        this.nota3 = modalParcial3;
        this.promedio = (( this.nota1 + this.nota2 + this.nota3)/3).toFixed( 2);
        this.status = verificarEstado( this.promedio);
        //console.log( typeof modalParcial1);
        //console.log( this.id);
        //console.log(this.dni);
    }
}


//Modal para cargar Estudiantes.

if ( document.getElementById( 'btnModalAddEst')) {

    let modal = document.getElementById( 'myModal');
    let button = document.getElementById( 'btnModalAddEst');
    let span = document.getElementsByClassName( 'close')[0];
    let body = document.getElementsByTagName( 'body')[0];

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
const dniEstudiante = document.getElementById('modalDNI');
const nombreEstudiante = document.getElementById('modalNombre');
const modalParcial1 = document.getElementById('modalParcial1');
const modalParcial2 = document.getElementById('modalParcial2');
const modalParcial3 = document.getElementById('modalParcial3');

agregaEstudiante.addEventListener('click', ( ) => {
    //validar dni.
    const validarDni =(dni) => {
        if ( dni.length===6 && !isNaN(dni)) {
            return true;
        } else {
            return false;
        }
    }
    const validarNombre = (nombre) => {
        return nombre.length >=3;
    }
    //validar notas
    const validarNotas = (nota) => {
        return !isNaN(nota) && nota >= 1 && nota <= 10;
    }
    if (validarDni(dniEstudiante.value) && validarNombre(nombreEstudiante.value) && validarNotas(Number(modalParcial1.value)) && validarNotas(Number(modalParcial2.value)) && validarNotas(Number(modalParcial3.value))) {
        let nuevoEstudiante = new EstudianteCreado ( dniEstudiante.value, nombreEstudiante.value, Number(modalParcial1.value),Number(modalParcial2.value), Number(modalParcial3.value));
        estudiantesActuales.push(nuevoEstudiante);
        localStorage.setItem("estudiantes",JSON.stringify(estudiantesActuales));
        estudiantesActuales = JSON.parse( localStorage.getItem( 'estudiantes'));
        generarListaEstudiantes( estudiantesActuales);

        dniEstudiante.value = '';
        nombreEstudiante.value = '';
        modalParcial1.value = '';
        modalParcial2.value = '';
        modalParcial3.value = '';
    } else {
        alert("Alguno de todos los campos no es válido.");
    }


    console.log(dniEstudiante.value);
    console.log(nombreEstudiante.value);
    /* let nuevoEstudiante = new EstudianteCreado ( validarDni(dniEstudiante.value), nombreEstudiante.value, Number(modalParcial1.value),Number(modalParcial2.value), Number(modalParcial3.value));
    estudiantesActuales.push(nuevoEstudiante)
    console.log( dniEstudiante.value.length);
    console.log( typeof nombreEstudiante.value);//string
    console.log( typeof modalParcial1);//string
    console.log( typeof Number(modalParcial2.value));//number
    console.log( typeof modalParcial3.value);//string   

    localStorage.setItem("estudiantes",JSON.stringify(estudiantesActuales))
    estudiantesActuales = JSON.parse( localStorage.getItem( 'estudiantes'));
    console.log(estudiantesActuales);
    generarListaEstudiantes( estudiantesActuales); */
})

buscador.addEventListener( 'keyup', (e) => {
    
    const estudiantesFlitro = estudiantesActuales.filter((estudiante) => estudiante.nombre.toLowerCase().includes(e.target.value));
    console.log( estudiantesFlitro);
})


console.log( modalParcial1.value,modalParcial2.value, modalParcial3.value)
// Fin modal
