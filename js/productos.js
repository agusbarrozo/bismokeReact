// simulador desafio 4
let precioProducto = 0
let cantidadCuotas = 0
let resultado = 0
const iva = 0.21

function precio(){
    precioProducto = prompt("Ingrese el monto del producto");
    console.log(`El precio del producto es ${precioProducto}`);
    //document.write(`El precio del producto es ${precioProducto}. <br>`);
}

precio();

function cuotas(){
    cantidadCuotas = prompt("Seleccione cantidad de cuotas (3 - 6 - 9 - 12) a pagar");
    console.log(`Va a pagar el monto total en ${cantidadCuotas} cuotas.`);
    //document.write(`Va a pagar el monto total en ${cantidadCuotas} cuotas. <br>`);
}

cuotas();

function dividir(precioProducto, cantidadCuotas){
    resultado = precioProducto / cantidadCuotas;
    console.log(`Cada cuota mensual tiene un costo de ${resultado}`)
    //document.write(`Cada cuota mensual tiene un costo de ${resultado} <br>`)
}

dividir(precioProducto, cantidadCuotas);


function precioIva(){
    precioIva = precioProducto * iva;
    console.log(`El precio del IVA es de ${precioIva}`);
    //document.write(`El precio del IVA es de ${precioIva} <br>`);
}

precioIva();


// funcion constructora
function productos(nombre, precio, stock){
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
}


// los productos HOME
const home1 = new productos("Tray", 6000, true);
const home2 = new productos("Ashtray", 7500, true);
const home3 = new productos("Grinder", 4500, true);

// los productos TRAVEL
const travel1 = new productos("Pouch", 2250, true);
const travel2 = new productos("Capsule storage", 1800, true);
const travel3 = new productos("4-Piece Grinder", 6000, true);

// los productos EVERYDAY
const everyday1 = new productos("Keychain", 3000, true);
const everyday2 = new productos("Infinity Card", 1500, true);
const everyday3 = new productos("Rolling papers", 600, true);


//muestra en consola
console.log(home1)
console.log(home2)
console.log(home3)
console.log(travel1)
console.log(travel2)
console.log(travel3)
console.log(everyday1)
console.log(everyday2)
console.log(everyday3)


/* array de catalogo pusheando producto por producto separada
const catalogo = [];
catalogo.push(new productos("Tray", 6000, true));
catalogo.push(new productos("Ashtray", 7500, true));
catalogo.push(new productos("Grinder", 4500, true));
catalogo.push(new productos("Pouch", 2250, true));
catalogo.push(new productos("Capsule storage", 1800, true));
catalogo.push(new productos("4-Piece Grinder", 6000, true));
catalogo.push(new productos("Keychain", 3000, true));
catalogo.push(new productos("Infinity Card", 1500, true));
catalogo.push(new productos("Rolling papers", 600, true));

console.table(catalogo)
*/

/* para separarlos por tipo de producto
const pHome = [];
pHome.push(home1, home2, home3)

const pTravel = [];
pTravel.push(travel1, travel2, travel3)

const pEveryday = [];
pEveryday.push(everyday1, everyday2, everyday3)
*/

const catalogo = [];
catalogo.push(home1, home2, home3, travel1, travel2, travel3, everyday1, everyday2, everyday3)

// para ordenarlos de menor precio a mayor precio
catalogo.sort(function(a, b){
    if(a.precio > b.precio){
        return 1;
    }
    if(a.precio < b.precio){
        return -1;
    }
    return 0;
})

// para mostrar el array de productos (catalogo) segun el sort
console.table(catalogo)

