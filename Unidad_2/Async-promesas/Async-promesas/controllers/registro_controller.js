import { clientService } from "../service/client-service.js";
const formulario = document.querySelector("[data-form]");

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const nombre = document.querySelector("[data-nombre]").value;
    const email = document.querySelector("[data-email]").value;

    clientService.crearcliente(nombre, email)
        .then((respuesta) => {
            console.log("todo oke", respuesta);
            window.location.href = "../screens/registro_completado.html";
        })
        .catch((err) => {
            console.log("todo mal", err);
            alert("Ocurrio un error, intente nuevamente");
        });
});