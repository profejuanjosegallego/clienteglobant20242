let botonZona=document.getElementById("botonZona")

let cajaNombreZona=document.getElementById("nombreZona")
let cajaVolumenZona=document.getElementById("volumenZona")
let cajaPesoZona=document.getElementById("pesoZona")

let formualrioZona=document.getElementById("formualriozona")

botonZona.addEventListener("click",function(evento){

    evento.preventDefault()
    
    let datosZona={
        nombreZona:cajaNombreZona.value,
        volumenMaximo:cajaPesoZona.value,
        pesoMaximo:cajaPesoZona.value

    }

    formualrioZona.reset()

    Swal.fire({
        title: "Good job!",
        text: "You clicked the button!",
        icon: "success"
    });
    console.log(datosZona)
    
    //llamar al servicio para entregarle los datos


})