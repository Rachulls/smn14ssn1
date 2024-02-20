// ARRAY METHODS

// 1. FIND
const numeros = [10, 15, 20, 25, 30, 35, 40];
const numMayorA25 = numeros.find((numero) => numero > 25);
console.log(numMayorA25);

// 2. SOME
const numeros2 = [1, 5, 5, 7, 11];
const numerosPares = numeros2.some((numero) => numero % 2 === 0);
console.log(numerosPares);

// 3. EVERY
const numeros3 = [12, 14, 16, 18, 20];
const mayoresA10 = numeros3.every((numero) => numero > 10);
console.log(mayoresA10);

// 4. INCLUDES
const nombres = ["Raul", "Maria", "Pedro", "Piero"];
const consultaNombre = nombres.includes("Peter");
console.log(consultaNombre);

// 5. MAP
const productos = [
  { id: 1, nombre: "Camiseta", precio: 20 },
  { id: 2, nombre: "Pantalón", precio: 30 },
  { id: 3, nombre: "Zapatos", precio: 50 },
];
const nombresProductos = productos.map((producto) => producto.nombre);
console.log(nombresProductos);

// 6. FILTER
const numeros4 = [2, 8, 3, 10, 5, 7];
const numerosMayoresQue5 = numeros4.filter(numero => numero > 5);
console.log(numerosMayoresQue5);

// 7. REDUCE
const numero5 = [2, 4, 6, 8, 10];
const suma = numero5.reduce((acumulador, numero) => acumulador + numero, 0);
console.log(suma);