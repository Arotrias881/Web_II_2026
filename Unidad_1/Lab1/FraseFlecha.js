const palabraMasLargaFlecha = (frase) =>
    frase.split(" ").reduce((a, b) => a.length > b.length ? a : b);

let frase = "dia largo de programacion en la universidad";
console.log("Flecha:", palabraMasLargaFlecha(frase));