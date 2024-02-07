//A partir de estos días filtrar por días que empiezan por "m"://

const dias = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes','sabado', 'domingo']
let diasConM = dias.filter(dia => dia.startsWith("m"));
console.log(diasConM);