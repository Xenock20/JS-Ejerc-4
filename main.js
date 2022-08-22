let nombre = "Federico";
let apellido = "Saboredo";

let estudiante = `${nombre} ${apellido}`;

console.log(estudiante);

let estudianteMayus = estudiante.toUpperCase();

console.log(estudianteMayus);

let estudianteMinus = estudiante.toLowerCase();

console.log(estudianteMinus);

let num = estudiante.length;

console.log(num);

let primeraLetra = nombre.charAt(0);

console.log(primeraLetra);

let ultimaLetra = apellido.charAt(apellido.length - 1);

console.log(ultimaLetra);

let sinEspacios = estudiante.replace(" ", "");

console.log(sinEspacios);

let existe = estudiante.includes(nombre);

console.log(existe);