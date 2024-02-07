/*24. Ordena esta estructura completa por jefe, empleado y becario a la vez
que ordenandolo por edad, y devuelve un objeto.*/

const trabajadores = {
    Pedro: {puesto: 'empleado' , edad: 40},
    Ana: {puesto: 'becario',edad: 34},
    Mike: {puesto: 'becario',edad: 37},
    Oscar: {puesto: 'empleado',edad: 35},
    Juan: {puesto: 'becario',edad: 29},
    Marta: {puesto: 'jefe',edad: 26},
    Maria: {puesto: 'empleado',edad: 28},
    Pablo: {puesto: 'jefe',edad: 36},
     }
     const ordenPuesto = (puesto) => {
        const orden = { jefe: 1, empleado: 2, becario: 3 };
        return orden[puesto];
     }
     const trabajadoresOrdenados = Object.entries(trabajadores).sort((a, b) => { 
        const ordenA = ordenPuesto(a[1].puesto);
        const ordenB = ordenPuesto(b[1].puesto);
        if (ordenA !== ordenB) {
            return ordenA - ordenB;
        }
        return a[1].edad - b[1].edad;
    }).reduce((obj, [key, value]) => ({ ...obj, [key]: value }), {});
    
    console.log(trabajadoresOrdenados);