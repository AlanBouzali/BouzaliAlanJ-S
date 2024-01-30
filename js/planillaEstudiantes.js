import { estudiantesExistentes} from './inicio.js';


/* export const agregarEstudiante = (idEstudiante) => {

} */


const nuevoDni = document.getElementById( 'modalDNI').value;
const nuevoModalNombre = document.getElementById( 'modalNombre').value;
const nuevoParcial1 = document.getElementById( 'modalParcial1').value;
const nuevoParcial2 = document.getElementById( 'modalParcial2').value;
const nuevoParcial3 = document.getElementById( 'modalParcial3').value;


export let renderNuevoEstudiante = {
    id: '',
    documento: nuevoDni,
    nombre: nuevoModalNombre,
    nota1: nuevoParcial1,
    nota2: nuevoParcial2,
    nota3: nuevoParcial3,
    promedio: ( nuevoParcial1 + nuevoParcial2 + nuevoParcial3)/3,
    status,
}



/* const renderNuevoEstudiante = ( nuevoEstudiante) => {

} */