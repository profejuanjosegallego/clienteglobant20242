export async function registrarMercancia(datosMercancia){

    const URL="http://localhost:8080/logisticAPP/v1/mercancias"

    let peticion={
        method:"POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(datosMercancia)
    }


    let respuestaServidor=await fetch(URL,peticion)

    let respuestaFinal= await respuestaServidor.json()

    console.log(respuestaFinal)

}