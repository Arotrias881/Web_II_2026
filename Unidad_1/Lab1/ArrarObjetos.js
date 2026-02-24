function sumarPropiedad(array, propiedad) {
    let suma = 0;

    for (let i = 0; i < array.length; i++) {
        
        if (typeof array[i][propiedad] === "number") {
            suma += array[i][propiedad];
        }
    }

    return suma;
}


let productos = [
    { nombre: "Laptop", precio: 1000, stock: 5 },
    { nombre: "Mouse", precio: 50, stock: 10 },
    { nombre: "Teclado", precio: 80, stock: 7 }
];

console.log("Tradicional (precio):", sumarPropiedad(productos, "precio"));
console.log("Tradicional (stock):", sumarPropiedad(productos, "stock"));