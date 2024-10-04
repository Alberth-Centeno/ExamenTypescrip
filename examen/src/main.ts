import { marcas } from "./data/data";

/**Marca
 * Contar cuántas marcas hay (no usar length)
 * Ordenar de la A a la Z
 */


function contarMarcas(marcas: { marca: string }[]): number {
    let contador = 0;
    for (const _ of marcas) {
        contador++;
    }
    return contador;
}

function ordenarMarcas(marcas: { marca: string }[]): { marca: string }[] {
    return marcas.sort((a, b) => a.marca.localeCompare(b.marca));
}

const totalMarcas = contarMarcas(marcas);
const marcasOrdenadas = ordenarMarcas([...marcas]);

console.log("Ejercicio Marcas")
console.log()
console.log(`Total de marcas: ${totalMarcas}`);
console.log(`Marcas ordenadas:`, marcasOrdenadas.map(m => m.marca));
console.log("==========================");
/**
 * inventario
 * cual es el productoo con mayor existencia en inventory
 * cantidad existencia
 */
import { inventory } from "./data/data";

function mayorProductoExistente(arr: { name: string, quantity: number }[]): { name: string, quantity: number } {
    let masExistencia: { name: string, quantity: number } = { name: "", quantity: 0 };
  
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

const productoMayorExistencia = mayorProductoExistente(inventory);
console.log("Ejercicio Inventario")
console.log()
console.log(`El producto con mayor existencia en el inventario es: ${productoMayorExistencia.name}`);
console.log(`Cantidad de existencia: ${productoMayorExistencia.quantity}`);

console.log("==========================");
/**
 * heroes
 * cuantos heroes hay por cada ciudad
 * cual es la ciudad que tien mas heroes
 */

import { heroes } from "./data/data";

function contarHeroes(arr: { name: string; city: string; power: string; type: string }[]): { city: string; count: number }[] {
    const contarCiudad: Record<string, number> = {};

    for (let i = 0; i < arr.length; i++) {
        const city = arr[i].city;

        if (!contarCiudad[city]) {
            contarCiudad[city] = 0;
        }
        contarCiudad[city]++;
    }

    const result: { city: string; count: number }[] = [];
    for (const city in contarCiudad) {
        result.push({ city, count: contarCiudad[city] });
    }

    return result;
}

const heroesPoCiudad = contarHeroes(heroes);
console.log("Ejercicio Heroes")
console.log()

heroesPoCiudad.forEach(entry => {
    console.log(`Ciudad: ${entry.city}, Cantidad de héroes: ${entry.count}`);
});

const ciudadConMasHeroes = heroesPoCiudad.reduce((prev, current) => {
    return (prev.count > current.count) ? prev : current;
});

console.log()
console.log(`\nLa ciudad con más héroes es: ${ciudadConMasHeroes.city} con ${ciudadConMasHeroes.count} héroes.`);
console.log("==========================");

/**
 * Persona
 * sumar todas las edades
 * calcular la media de edades
 */
import { people } from "./data/data";
function calcularEdadaTotalPromedio(arr: { id:number; name: string; edad: number; sexo:string }[]): { edadTotal: number; edadPromedio: number } {
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

const edadTotalPromedio = calcularEdadaTotalPromedio(people);
console.log("Ejerccicio Personas")
console.log()
console.log(`la edad total es: ${edadTotalPromedio.edadTotal}\nLa edad promedio es de: ${edadTotalPromedio.edadPromedio}`);



