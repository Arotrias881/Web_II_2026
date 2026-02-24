const sumarPropiedadFlecha = (array, propiedad) =>
  array.reduce((suma, obj) => suma + (typeof obj[propiedad] === "number" ? obj[propiedad] : 0), 0);

let productos = [
    { nombre: "Laptop", precio: 1000, stock: 5 },
    { nombre: "Mouse", precio: 50, stock: 10 },
    { nombre: "Teclado", precio: 80, stock: 7 }
];

productos.forEach(producto => {
    console.log(`${producto.nombre} - Precio: ${producto.precio}, Stock: ${producto.stock}`);
});


console.log("Flecha (precio total):", sumarPropiedadFlecha(productos, "precio"));  
console.log("Flecha (stock total):", sumarPropiedadFlecha(productos, "stock"));    