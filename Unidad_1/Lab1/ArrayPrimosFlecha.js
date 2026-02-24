const soloPrimosFlecha = (array) =>
  array.filter(num => num > 1 && ![...Array(Math.floor(Math.sqrt(num)) + 1)].some((_, i) => i > 1 && num % i === 0));

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
console.log("Flecha:", soloPrimosFlecha(numeros));