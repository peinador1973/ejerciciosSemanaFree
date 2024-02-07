//7. Crea dos arrays y declara una función que junte estos dos arrays en uno.//

let animales = ["perro", "gato,"];
let comida = ["carne", "pescado,"];

function combinarArrays (array1, array2){
    return array1.concat(array2);
}

let resultado = combinarArrays(animales, comida);
console.log (resultado);
