import App from "./classes/App.js"
// 0. Ordenar nuestra base de datos (ARRAY DE OBJETOS)
let app = new App();
console.log(campers);
campers.sort((a , b) =>{
    if (a.nombre < b.nombre){
        return -1
    }

    if (a.nombre > b.nombre){
        return 1
    }

    return 0
})



campers.forEach((opcionCamper)=>{
    const nombreAdd = document.createElement('option')
    nombreAdd.value = opcionCamper.nombre
    nombreAdd.textContent = opcionCamper.nombre
    document.querySelector ('#camper'). appendChild (nombreAdd)
})



