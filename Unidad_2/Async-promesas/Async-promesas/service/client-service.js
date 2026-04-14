
/*


const listar_clientes = () => {
  const promesa = new Promise((resolve, reject) => {
    const http = new XMLHttpRequest(); //variable para resquest con http
    http.open("GET", "http://localhost:3000/perfil"); //abrir la conexion con el metodo get y la url del json server
    http.send(); //enviar la peticion
    http.onload = () => {
      const response = JSON.parse(http.response); //parsear la respuesta del servidor
      if (http.response >= 400) {
        reject(response);
      } else {
        resolve(response);
      }
    };
  });
  return promesa;
};

listar_clientes()
  .then((data) => {
    data.forEach((perfil) => {
      const nuevaFila = crearFila(perfil.nombre, perfil.email);
      table.appendChild(nuevaFila);
    });
  })
  .catch((error) => alert("Sin conexion"));*/

///--------optimizado-----///

listar_clientes = () =>
  fetch("http://localhost:3000/perfil").then((respuesta) => respuesta.json());

const crearcliente = (nombre, email) => {
  return fetch("http://localhost:3000/perfil", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ nombre, email, id: uuid.v4() }),
  });

};

const actualizarcliente=(nombre, email,id)=>{// solo modifico el nombre y el email, el id se mantiene igual
    return fetch(`http://localhost:3000/perfil/${id}`, {
        method: "PUT",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify({ nombre, email }),
    }).then(respuesta =>console.log(respuesta)).catch((err) => console.log(err));
};

const eliminarcliente=(id)=>{
    console.log("eliminar", id);
    return fetch(`http://localhost:3000/perfil/${id}`, {
        method: "DELETE",
    });
};

//referendia ID

const cliente=(id)=>{
    return fetch(`http://localhost:3000/perfil/${id}`).then((respuesta) => respuesta.json);
}

export const clientService = {
    listar_clientes,
    crearcliente,
    eliminarcliente,
    actualizarcliente,
    cliente
};
