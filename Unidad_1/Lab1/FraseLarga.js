function palabraMasLarga(frase) {
    let palabras = frase.split(" ");
    let masLarga = "";

    for (let palabra of palabras) {
        if (palabra.length > masLarga.length) {
            masLarga = palabra;
        }
    }
    return masLarga;
}


let frase = "dia largo de programacion en la universidad";
console.log("Tradicional:", palabraMasLarga(frase));