import { clientService } from "../service/client-service.js";
const formulario = document.querySelector("[data-form]");
const obInfo= async()=>{
    const url = new URL(window.location);
    const id = url.searchParams.get("id");
    if(id==null){
        window.location.href="../screens/error.html";
    }
    const nombre=document.querySelector("[data-nombre]");
    const email=document.querySelector("[data-email]");
    try{
        const perfil= await clientService.cliente(id);// rescato los datos del json y los pego en el formulario
        if(perfil.nombre && perfil.email){
            nombre.value=perfil.nombre;
            email.value=perfil.email;
        }else{
            throw new Error();
        }
    }catch(error){
        window.location.href="../screens/error.html";
    }  
};

obInfo();

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const url = new URL(window.location);
    const id = url.searchParams.get("id");

    const nombre = document.querySelector("[data-nombre]").value;
    const email = document.querySelector("[data-email]").value;

    clientService.actualizarcliente(nombre, email, id)
        .then(() => {
            window.location.href = "../screens/edicion_completado.html";
        })
        .catch((err) => {
            console.log(err);
            alert("Error al actualizar");
        });
});