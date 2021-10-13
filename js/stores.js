// PARA HACER QUE LA PAGINA NO HAGA REFRESH CUANDO TOCO EL LINK

$("#botonBuenosAires").click(function (event){
    event.preventDefault();
})

$("#botonBarcelona").click(function (event){
    event.preventDefault();
})

$("#botonNewYork").click(function (event){
    event.preventDefault();
})

$("#botonHongKong").click(function (event){
    event.preventDefault();
})


// FUNCION PARA QUE APAREZCA TEXTO DESPUES DEL CLICK
// COMO HAGO PARA QUE TODOS TENGAN EL MISMO # Y MISMA FUNCION, PERO QUE EL TEXTO APAREZCA DEBAJO DE CADA CLICK Y NO SOLO ABAJO DE BUENOS AIRES?
//FUNCIONA
function funcionBsAs(){
    $("#botonBuenosAires").append("<h2>COMING SOON! STAY TUNED<h2>");
}

function funcionBarcelona(){
    $("#botonBarcelona").append("<h2>COMING SOON! STAY TUNED<h2>");
}

function funcionNewYork(){
    $("#botonNewYork").append("<h2>COMING SOON! STAY TUNED<h2>");
}

function funcionHongKong(){
    $("#botonHongKong").append("<h2>COMING SOON! STAY TUNED<h2>");
}

// DISABLE CLICK DESPUES DEL PRIMERO. PROBAR DE VUELTA
/*
$("#botonesStore").click(function (event){
    if ($(this).hasClass("disabled")) {
        event.preventDefault();
    }
    $(this).addClass("disabled");
});
*/

