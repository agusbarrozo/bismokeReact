// datos para ingresar fecha de nacimiento y que salga en consola como en pantalla
alert("DEBE SER MAYOR DE EDAD PARA ACCEDER A ESTE SITIO")
let dia = prompt("Dia de su nacimiento");
let mes = prompt("Mes de su nacimiento");
let año = prompt("Año de su nacimiento");

console.log(dia + "/" + mes + "/" + año)

console.log("El usuario tiene " + (2021 - año))

if(año >= 2004){
    alert("NO PUEDE INGRESAR AL SITIO")
}

// probando clase 8
//console.dir(document.head);
//let div = document.getElementById("frontPage");
//console.log(div.innerHTML);

// Crear nodo de tipo Elemento, etiqueta p
let parrafo = document.createElement("p");
// Insertar HTML interno
parrafo.innerHTML = "<h2>¡Hola Coder!</h2>"; 
// Añadir el nodo Element como hijo de body
document.body.appendChild(parrafo);
