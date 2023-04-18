import { camperPersona , psicologa , fecha , hora , resultados , formulario} from "../Selectores.js";
import { datosEntrevista , nuevaEntrevista } from "../Funciones.js";

class App{
    constructor(){
        this.initApp();
    }
    initApp(){
        camperPersona.addEventListener('change',datosEntrevista);
        // 8. AÑADIR LOS DEMAS EVENT LISTENERS
        psicologa.addEventListener('change', datosEntrevista);
        fecha.addEventListener ('change', datosEntrevista);
        hora.addEventListener ('input', datosEntrevista);
        resultados.addEventListener ('change', datosEntrevista);
        formulario.addEventListener('submit', nuevaEntrevista)
    }
}

export default App