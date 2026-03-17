document.getElementById("boton").addEventListener("click", function(){

    let imagen = document.getElementById("imagen").files[0];
    let mostrar = document.getElementById("mostrar");

    if (!imagen) {
        mostrar.innerHTML = "<p>Debes completar todos los campos</p>";
        return;
    }
    const url_local = "http://localhost:5001/api/automatico/cargar_datos";
    const url_docker = "http://api:5001/api/automatico/cargar_datos";
    let formData = new FormData();
    formData.append("imagen", imagen);
    fetch(url_local, {
        method: "POST",
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        mostrar.innerHTML = `
        <h3>¿Los datos detectados son correctos?</h3>
        <label>Remito:</label>
        <input type="text" id="remito_corregido" value="${data.remito}"><br><br>
        <button id="confirmar">Confirmar</button>
        <button id="cancelar">Cancelar</button>
        `;
        document.getElementById("confirmar").addEventListener("click", enviarDatosFinales);
        document.getElementById("cancelar").addEventListener("click", function(){
            mostrar.innerHTML = "<p>Operación cancelada</p>";
        });
    })
    .catch(error => {
        mostrar.innerHTML = "<p>Error al enviar datos</p>";
    });

});
function enviarDatosFinales(){
    let remito = document.getElementById("remito_corregido").value;
    let imagen = document.getElementById("imagen").files[0];
    let mostrar = document.getElementById("mostrar");
    const url_local = "http://localhost:5001/api/manual/cargar_datos";
    const url_docker = "http://api:5001/api/manual/cargar_datos";

        if (!imagen || !remito) {
        mostrar.innerHTML = "<p>Debes completar todos los campos</p>";
        return;
    }
    let formData = new FormData();
    formData.append("remito", remito);
    formData.append("imagen", imagen);

    fetch(url_local, {
        method: "POST",
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        mostrar.innerHTML = "<p>Datos guardados correctamente</p>";
    })
    .catch(error => {
        mostrar.innerHTML = "<p>Error al guardar los datos</p>";
    });

}