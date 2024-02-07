/*15. Crea una función que nos compruebe si una frase que le indiquemos
tiene todas sus letras mayúsculas, todas sus letras minúsculas o tiene
letras mayúsculas y minúsculas. Mostrar el resultado y la frase en la
consola.*/

function analizarFrase(frase) {
	if (frase === frase.toUpperCase()) {
		return "La frase está en mayusculas";
	} else if (frase === frase.toLowerCase()){
		return "La frase está en minusculas";
	} else {
		return "La frase tiene mayusculas y minusculas";
	}
}
	let resultado = analizarFrase("Esta semana no tenemos Clase");
	console.log(resultado);
