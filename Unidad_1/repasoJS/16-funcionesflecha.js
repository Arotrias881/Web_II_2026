const saluda=()=>{
    console.loog("funcion flecha");
}
saludar();

const duplicar = numero=>{
    return numero*2;
};
console.log(duplicar(5));

const suma=(a,b)=>{
    return a+b;
}
console.log(suma(5,10));

const crearUsuarios=(nombre,edad)=>({nombre:nombre,edad:edad});
console.log(crearUsuarios("juan",25));

const numero=[1,2,3,4,5];
//funcion para filtrar
const procesarNumeros = (numeros) => {
    return numeros
        .filter(numero => numero > 2)
        .map(numero => numero * 2);
};

console.log(procesarNumeros(numero));
console.log(resultado);

const usuarios = [
    { nombre: "juan", edad: 25 },
    { nombre: "maria", edad: 30 },
    { nombre: "pedro", edad: 15 },
    { nombre: "lucia", edad: 28 },
    { nombre: "carlos", edad: 22 },
    { nombre: "ana", edad: 27 }
];

const procesarUsuarios = (usuarios) => {
    return usuarios
        .filter(usuario => usuario.edad > 18) // filtramos que la edad sea mayores de 18
        .map(usuario => { // transformamos los datos
            const { nombre } = usuario; // reestructurar para obtener el nombre
            return nombre.length > 5 
                ? nombre.toUpperCase() 
                : nombre.toLowerCase();
        });
};

const result2 = procesarUsuarios(usuarios);
console.log(result2);