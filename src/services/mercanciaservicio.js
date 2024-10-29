export async function registrarMercancia(datosMercancia){

    const URL="http://localhost:8080/logisticAPP/v1/mercancias"

    let peticion={
        method:"POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(datosMercancia)
    }

    

   
    fetch(URL, peticion)
    .then(function(respuesta){
        return respuesta.json()
    })
    .then(function(respuesta){
        console.log(respuesta)
    })
    .catch(function(error){
        console.log("upps",error)
    })
       
    

    //let respuestaFinal= await respuestaServidor.json()

    //console.log(respuestaFinal)

}