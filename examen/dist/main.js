"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("./data/data");
/**Marca
 * Contar cuántas marcas hay (no usar length)
 * Ordenar de la A a la Z
 */
function contarMarcas(marcas) {
    let contador = 0;
    for (const _ of marcas) {
        contador++;
    }
    return contador;
}
function ordenarMarcas(marcas) {
    return marcas.sort((a, b) => a.marca.localeCompare(b.marca));
}
const totalMarcas = contarMarcas(data_1.marcas);
const marcasOrdenadas = ordenarMarcas([...data_1.marcas]);
console.log("Ejercicio Marcas");
console.log();
console.log(`Total de marcas: ${totalMarcas}`);
console.log(`Marcas ordenadas:`, marcasOrdenadas.map(m => m.marca));
console.log("==========================");
/**
 * inventario
 * cual es el productoo con mayor existencia en inventory
 * cantidad existencia
 */
const data_2 = require("./data/data");
function mayorProductoExistente(arr) {
    let masExistencia = { name: "", quantity: 0 };
    for (let i = 0; i < arr.length; i++) {
        let product = arr[i].name;
        let quantity = arr[i].quantity;
        if (quantity > masExistencia.quantity) {
            masExistencia.name = product;
            masExistencia.quantity = quantity;
        }
    }
    return masExistencia;
}
const productoMayorExistencia = mayorProductoExistente(data_2.inventory);
console.log("Ejercicio Inventario");
console.log();
console.log(`El producto con mayor existencia en el inventario es: ${productoMayorExistencia.name}`);
console.log(`Cantidad de existencia: ${productoMayorExistencia.quantity}`);
console.log("==========================");
/**
 * heroes
 * cuantos heroes hay por cada ciudad
 * cual es la ciudad que tien mas heroes
 */
const data_3 = require("./data/data");
function contarHeroes(arr) {
    const contarCiudad = {};
    for (let i = 0; i < arr.length; i++) {
        const city = arr[i].city;
        if (!contarCiudad[city]) {
            contarCiudad[city] = 0;
        }
        contarCiudad[city]++;
    }
    const result = [];
    for (const city in contarCiudad) {
        result.push({ city, count: contarCiudad[city] });
    }
    return result;
}
const heroesPoCiudad = contarHeroes(data_3.heroes);
console.log("Ejercicio Heroes");
console.log();
heroesPoCiudad.forEach(entry => {
    console.log(`Ciudad: ${entry.city}, Cantidad de héroes: ${entry.count}`);
});
const ciudadConMasHeroes = heroesPoCiudad.reduce((prev, current) => {
    return (prev.count > current.count) ? prev : current;
});
console.log();
console.log(`\nLa ciudad con más héroes es: ${ciudadConMasHeroes.city} con ${ciudadConMasHeroes.count} héroes.`);
console.log("==========================");
/**
 * Persona
 * sumar todas las edades
 * calcular la media de edades
 */
const data_4 = require("./data/data");
function calcularEdadaTotalPromedio(arr) {
    let edadTotal = 0;
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        const person = arr[i];
        edadTotal += person.edad;
        count++;
    }
    const edadPromedio = edadTotal / count;
    return { edadTotal, edadPromedio };
}
const edadTotalPromedio = calcularEdadaTotalPromedio(data_4.people);
console.log("Ejerccicio Personas");
console.log();
console.log(`la edad total es: ${edadTotalPromedio.edadTotal}\nLa edad promedio es de: ${edadTotalPromedio.edadPromedio}`);
