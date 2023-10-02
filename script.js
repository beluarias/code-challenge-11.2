const url = "https://crudcrud.com/api/adc54d7744e946cd8ffc1851accabb6d/prueba000";

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("enviar").addEventListener("click", () => {
        let persona = {
            nombre: document.getElementById("nombre").value,
            apellido: document.getElementById("apellido").value,
            grupo: document.getElementById("nacimiento").value,
        };

        fetch(url, {
            method: "POST",
            headers: {"Content-Type": "application/json; charset=utf-8",},
            body: JSON.stringify(persona),
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            alert('Envío exitoso');
            document.getElementById("nombre").value = "";
            document.getElementById("apellido").value = "";
            document.getElementById("nacimiento").value = "";
        })
        .catch((error) => {
            console.error("Error en la solicitud:", error);
            alert('Hubo un error en el envío');
        });
    });
});
