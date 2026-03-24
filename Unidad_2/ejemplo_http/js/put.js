function putData() {
    const updateData = {
        titulo: "Actualizado",
        descripcion: "es un post actualizado",
        fecha: new Date().toISOString()
    };

    fetch(`${API_URL}/1`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(updateData)
    })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error estado: ${response.status}`);
            }
            return response.json();
        })
        .then(data => showResult(data))
        .catch(error => showResult(error.message, true));
}