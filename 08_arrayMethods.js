// ARRAY METHODS

// 1. FIND
// const numeros = [10, 15, 20, 25, 30, 35, 40];
// const numMayorA25 = numeros.find((numero) => numero > 25);
// console.log(numMayorA25);

// // 2. SOME
// const numeros2 = [1, 5, 5, 7, 11];
// const numerosPares = numeros2.some((numero) => numero % 2 === 0);
// console.log(numerosPares);

// // 3. EVERY
// const numeros3 = [12, 14, 16, 18, 20];
// const mayoresA10 = numeros3.every((numero) => numero > 10);
// console.log(mayoresA10);

// // 4. INCLUDES
// const nombres = ["Raul", "Maria", "Pedro", "Piero"];
// const consultaNombre = nombres.includes("Peter");
// console.log(consultaNombre);

// // 5. MAP
// const productos = [
//   { id: 1, nombre: "Camiseta", precio: 20 },
//   { id: 2, nombre: "Pantalón", precio: 30 },
//   { id: 3, nombre: "Zapatos", precio: 50 },
// ];
// const nombresProductos = productos.map((producto) => producto.nombre);
// console.log(nombresProductos);

// // 6. FILTER
// const numeros4 = [2, 8, 3, 10, 5, 7];
// const numerosMayoresQue5 = numeros4.filter(numero => numero > 5);
// console.log(numerosMayoresQue5);

// // 7. REDUCE
// const numero5 = [2, 4, 6, 8, 10];
// const suma = numero5.reduce((acumulador, numero) => acumulador + numero, 0);
// console.log(suma);

const dogs = [
  {
    id: "dog-1",
    name: "Poodle",
    temperament: [
      "Intelligent",
      "Active",
      "Alert",
      "Faithful",
      "Trainable",
      "Instinctual",
    ],
  },
  {
    id: "dog-2",
    name: "Bernese Mountain Dog",
    temperament: ["Affectionate", "Intelligent", "Loyal", "Faithful"],
  },
  {
    id: "dog-3",
    name: "Labrador Retriver",
    temperament: [
      "Intelligent",
      "Even Tempered",
      "Kind",
      "Agile",
      "Outgoing",
      "Trusting",
      "Gentle",
    ],
  },
];

// FIND
const dogFind = dogs.find((dog) => dog.name === "Poodle");

// SOME
const dogSome = dogs.some((dog) => dog.temperament.includes("Aggresive"));

// EVERY
const dogEvery = dogs.every((dog) => dog.temperament.includes("Intelligent"));

// INCLUDES
const dogIncludes = dogs.includes();

// MAP
const dogMap = dogs.map((dog) => {
  if (dog.name === "Poodle") {
    return dog;
  } else {
    return "No se encontro";
  }
});

// FILTER
const dogFilter = dogs.filter((dog) => dog.temperament.includes("Faithful"));

// MAP ADAPTADOR
const dogsAdapter = dogs.map((dog) => {
  return {
    id: dog.id,
    name: dog.name,
  };
});

// [1,2,3,4,5,6,7,8,9,10]
// HICE CLICK EN ID 5
// ALGORITMO FILTER
// Pr favor filtrame todos los elementos que sean diferentes al id seleccionado
// const nuevoARrrFiltrado = arreglo.filter(arr => arr.id! === 5);
// [1,2,3,4,6,7,8,9,10]

// REDUCE
const dogReduce = dogs.reduce((allTemperaments, dog) => {
  return [...allTemperaments, ...dog.temperament];
}, []);


// SUMATORIA
const arrNumeros = [1,2,3,4];
let suma = 0;
const sumReduce = arrNumeros.reduce((accumulator, currentValue) => accumulator + currentValue, suma);

// REACT
{
  dogs.filter((dog) => dog.name === "Faithful").map((dog) => dog.name);
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// OBJECT ASSIGN -> creado para mezclar objetos
const target = {a:1, b:2};
const source = {b:4, c:5};

// JUNTANDO OBJETOS
const returnedTarget = Object.assign(target, source);
console.log(returnedTarget);

// COPIA
const copy = Object.assign({}, returnedTarget);
const copy2 = {...copy};
console.log(copy);
console.log(copy2);