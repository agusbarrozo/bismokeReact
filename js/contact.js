let nombres = document.getElementById("fullname");
let emails = document.getElementById("emailAddress");

document.getElementById("fullName").value = "Agustin Barrozo";
document.getElementById("emailAddress").value = "agusbarrozo@gmail.com";

/*
function logSubmit(event){
    log.textContent = `Thank you for contacting us!`
    event.preventDefault();
}

const botonSubmit = document.getElementById("submit");
const checkAlert = document.getElementById("alert");
form.addEventListener("submit", logSubmit);
*/



// event cuando hago click en el boton submit
function funcionSubmit(){
    document.getElementById("checkAlert").innerHTML = "Thank you for contacting us!"
    alert("Answers submitted")
}

// event cuando cambio una opcion del dropdown - VOLVER A PROBAR
/*
function eleccionPurpose(){
    eleccion = document.forms[0].opcionesPurpose.value;
    alert(`You've selected ${eleccion}`)
}
*/