//Se crean interfaces para crear tipos de datos
interface alumno{
    nombre:string;
    apellidoP:string;
    apellidoM:string;
    edad:number;
    email:string;
    nota?:number;
}
//Se utiliza eñ ? para hacer opcional una variable
const alumno={ 
    nombre: "Enrique",
    apellidoP: "Hernandez",
    apellidoM: "Cervantes",
    edad: "22",
    email: "82061@alumnos.utleon.edu.mx",
}
//Crea una tabla de datos de la variable
console.table(alumno)

//<-------------------------------------------------------------->

let mascotas=['Perra', 'Perro', 'Gata', 'Gato', 'Loro', 'Cotorro']
console.log(mascotas)

mascotas[1]= 'Otro Gato'
mascotas.push('Leon')
console.log(mascotas)

//Push es para agregar uno nuevo y el [n] es para modificar uno
let tem:(number|string)[]=[]
tem.push(1)
tem.push('once')
console.log(tem)