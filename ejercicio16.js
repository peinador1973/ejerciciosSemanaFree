/*16. Crea una función que nos compruebe si una frase dada es un palíndromo

* Pistas:
               - pasar la frase a minúscula
               - convertir en array para recorrer cada elemento
               - eliminar espacios en blanco con un bucle
               - reverse()
               - comprobar que el array primero y su reverse son iguales y sus condiciones
Mostrar los resultados en un modal para: una frase palíndrom y otra que
no lo sea*/

function esPalindromo (frase){
    let fraseMin = frase.toLowerCase();
    let caracter = fraseMin.match(/[a-z]/g);
    return caracter.join('') === caracter.reverse().join('');
}
let frasePalindromo = "La ruta nos aporto otro paso natural";
let fraseNoPalindromo = "El guia se despisto";

let resultado1 = esPalindromo(frasePalindromo);
let resultado2 = esPalindromo(fraseNoPalindromo);

console.log(resultado1);
console.log(resultado2);

