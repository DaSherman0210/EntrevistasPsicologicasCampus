import {contenedorEntrevistas} from '../Selectores.js'
import { limpiar } from '../Funciones.js'
class UserInteface{
    //15.2 Metodo para gestion de los errores o confirmaciones de la interfaz de usuario
    printAlert(mensaje, tipoMensaje){
        //15.3 Creacion del div
        const divMensaje = document.createElement('div')
        divMensaje.classList.add('text-center' , 'alert' , 'd-block' , 'col-12')

        //15.4 
        if (tipoMensaje === 'error'){
            divMensaje.classList.add('alert-danger')
        } else{
            divMensaje.classList.add('alert-success')
        }

        //15.5 mensaje de error

        divMensaje.textContent = mensaje

        //15.6 Insertar en el Documento Object Modem (DOM)

        document.querySelector('#contenido').insertBefore (divMensaje , document.querySelector('.agregar-entrevista'))

        //15.7 Quitar el alert despues de cierto tiempo

        setTimeout(()=>{
            divMensaje.remove();
        }, 2000)

    }   
    //17.1 Metodo para imprimir entrevistas
    printInterviews({interviews}){ // aplicar destructuring desde funcion
        limpiar();
        interviews.forEach((interview)=>{
            const {camper , psicologa , resultados , imagen} = interview
            const interviewHTML = document.createElement('p')
            interviewHTML.innerHTML = `
            <div class="card mb-3" style="max-width: 540px;">
            <div class="row g-0">
                <div class="col-md-4">
                <img src="img/${imagen} " class="img-fluid rounded-start" alt="...">
                </div>
                <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">${camper}</h5>
                    <p class="card-text">${psicologa} </p>
                    <p class="card-text">${resultados} </p>
                </div>
                </div>
            </div>
            </div>
            `;
            contenedorEntrevistas.appendChild(interviewHTML)
        })
    }
}

export default UserInteface