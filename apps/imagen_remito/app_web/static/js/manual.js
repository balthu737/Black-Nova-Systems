document.getElementById("boton").addEventListener("click", function(){
    let remito = document.getElementById("remito").value.trim();
    let imagen = document.getElementById("imagen").files[0];
    let mostrar = document.getElementById("mostrar");

    if (!remito || !imagen) {
        mostrar.innerHTML = "<p>Debes completar todos los campos</p>";
        return;
    }
    const url_local = "http://localhost:5001/api/manual/cargar_datos"
    const url_docker = "http://api:5001/api/manual/cargar_datos"
    let formData = new FormData();
    formData.append("remito", remito);
    formData.append("imagen", imagen);
    fetch(url_local, {
        method: "POST",
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        mostrar.innerHTML = `<p>Los datos son N° remito: ${remito}</p>`;
    })
    .catch(error => {
        mostrar.innerHTML = "<p>Error al enviar los datos</p>";
    });

});