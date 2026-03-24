const form = document.getElementById("form");
const tabla = document.getElementById("tabla");

form.addEventListener("submit", function(e){
    e.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const curso = document.getElementById("curso").value;
    const edad = document.getElementById("edad").value;
    const hermanos = document.getElementById("hermanos").value;
    const ciudad = document.getElementById("ciudad").value;

    const fila = document.createElement("tr");

    fila.innerHTML = `
        <td>${nombre}</td>
        <td>${curso}</td>
        <td>${edad}</td>
        <td>${hermanos}</td>
        <td>${ciudad}</td>
        <td>
            <button class="action-btn" onclick="editar(this)">Editar</button>
            <button class="action-btn" onclick="eliminar(this)">Eliminar</button>
        </td>
    `;

    tabla.appendChild(fila);
    form.reset();
});

function eliminar(btn){
    btn.parentElement.parentElement.remove();
}

function editar(btn){
    const fila = btn.parentElement.parentElement;
    const datos = fila.children;

    document.getElementById("nombre").value = datos[0].textContent;
    document.getElementById("curso").value = datos[1].textContent;
    document.getElementById("edad").value = datos[2].textContent;
    document.getElementById("hermanos").value = datos[3].textContent;
    document.getElementById("ciudad").value = datos[4].textContent;

    fila.remove();
}
