document.getElementById("boton").addEventListener("click", function(){
    let remito = document.getElementById("remito").value
    let mostrar = document.getElementById("mostrar")
    if (!remito){
        mostrar.innerHTML = "<p>Debes completar todos los campos</p>"
        return
    }
    const url = `http://localhost:5001/api/buscar?remito=${remito}`
    fetch(url)
    .then(response => {
        if(response.status === 404){
            throw new Error("no_existe")
        }
        if(!response.ok){
            throw new Error("error_servidor")
        }
        return response.blob()
    })
    .then(blob => {
        const imgURL = URL.createObjectURL(blob)
        mostrar.innerHTML = `
        <p>Remito encontrado: ${remito}</p>
        <img src="${imgURL}" width="400">
        `
    })
    .catch(error => {
        if(error.message === "no_existe"){
            mostrar.innerHTML = "<p>El remito no existe</p>"
        }else{
            mostrar.innerHTML = "<p>Error del servidor</p>"
        }
    })

})