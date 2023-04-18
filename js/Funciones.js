import  Interviews  from "./classes/Interviews.js";
import  UserInteface from "./classes/UserInterface.js";
import { 
    camperPersona,
    psicologa,
    fecha,
    hora,
    resultados,
    formulario
} from "./Selectores.js";

const interviewsManager = new Interviews();
const userInteface = new UserInteface();

const entrevistaObject = {
    camper: '',
    //9. AÑADIMOS MAS PROPIEDADES AL ARRAY
    psicologa: '',
    fecha: '',
    hora: '',
    resultados: '',
    imagen: ''
}
export function datosEntrevista(e) {
    /*     console.log(e.target.value); */
        // 7. GUARDAR EN CADA PROPIEDAD EL VALOR
        entrevistaObject[e.target.name] = e.target.value
    }

export function nuevaEntrevista(e) {
    e.preventDefault();
    //14. DESTRUCTURING DESDE OBJETO DE ENTREVISTA

    const {camper, psicologa , fecha , hora , resultados, imagen ,} = entrevistaObject;

    //15. Validar
    if (camper === "" || psicologa === "" || fecha === "" || hora === "" || resultados === ""){
        //15.1 LLamado del metodo (printAlert) del objeto userInterface
        userInteface.printAlert('TODOS LOS CAMPOS SON OBLIGATORIOS' , 'error');
        return;
    }
    else{
        console.log(entrevistaObject);
    }
    //16. Gestion del nuevo registro
    //16.1 Generar un ID unico

    entrevistaObject.id = Date.now();

    //agregar imagen al objeto}

    var index = campers.findIndex(e => e.nombre === entrevistaObject.camper)
    if (index !== -1) {
        entrevistaObject.imagen = campers[index].imagen;
        index = null;
    }

    //16.3 Invocar metoo que añade la entrevista

    interviewsManager.addInterview({...entrevistaObject})

    //16.4 Reinciar Formulario
    formulario.reset();

    //16.5 Reiniciar Objeto

    reiniciarObjeto();

    //17 Imprimir HTML de entrevistas

    userInteface.printInterviews(interviewsManager);

}

export function reiniciarObjeto() {
    entrevistaObject.camper = '';
    entrevistaObject.psicologa = '';
    entrevistaObject.hora = '';
    entrevistaObject.fecha = '';
    entrevistaObject.resultados = '';
    entrevistaObject.id = '';
}

export function limpiar() {
    let m = document.querySelectorAll('p')
    for(let a =0; a<m.length;a++){
        m[a].remove();
    }
}




