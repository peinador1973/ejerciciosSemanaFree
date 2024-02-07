//14. Convierte la función del ejercicio anterior función a arrow function.//

const celsiusAFahrenheit = celsius => celsius * 1.8 + 32;
let gradosCelsius = 20;
let gradosFahrenheit = celsiusAFahrenheit(gradosCelsius);
console.log (`${gradosCelsius} grados celsius son ${gradosFahrenheit} grados Fahrenheit`);
