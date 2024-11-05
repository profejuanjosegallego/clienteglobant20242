
import { registrarMercancia } from "../services/mercanciaservicio.js"

let botonMercancia=document.getElementById("botonregistromercancia")

let cajaVolumenOcupa=document.getElementById("volumenmercancia")
let cajaPesoOcupa=document.getElementById("pesomercancia")
let cajaNombre=document.getElementById("nombremercancia")
let cajaDescripcion=document.getElementById("descripcionmercancia")
let cajaFechaEntrada=document.getElementById("fechaingresomercancia")
let cajaFechaSalida=document.getElementById("fechasalidamercancia")

botonMercancia.addEventListener("click",function(evento){
    evento.preventDefault()
    let objetoMercancia={
        volumenOcupa:cajaVolumenOcupa.value,
        pesoOcupa:cajaPesoOcupa.value,
        nombre:cajaNombre.value,
        descripcion:cajaDescripcion.value, 
        fechaEntrada:cajaFechaEntrada.value,
        fechaSalida:cajaFechaSalida.value,
        zonaBodega:{
            idZona:1
        }
    }
    console.log(objetoMercancia)
    //llamo al servicio para llevarle los datos al back
    
    const URL="http://localhost:8080/logisticAPP/v1/mercancias"

    let peticion={
        method:"POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(objetoMercancia)
    }

    
    
    Swal.fire({
        title: "Good job!",
        text: "You clicked the button!",
        icon: "success"
      });
})