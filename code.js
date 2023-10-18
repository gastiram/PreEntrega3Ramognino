
let usuario = prompt("Ingrese su nombre de usuario.")
const contraElegida = "12345";
let y = 1

function validarContrasenia() {
    do{ 
        var contrasenia =prompt("Ingrese su contraseña");
        console.log("Intento Nº " + y +"/5");
        y++   
    }while (contrasenia != contraElegida && y<=5);
    
    if (contrasenia == contraElegida){
        console.log("Bienvenido!");
    }else{
        alert("Agotaste el numero de intentos, pruebe de nuevo mas tarde.");
        console.log("Agotaste el numero de intentos, pruebe de nuevo mas tarde.");
    }
}

miCarrito=[];
function llenarCarrito(){
    do {
        var pedirItems=prompt("¿Que necesita comprar?, ¿Zapatillas, Remeras, Buzos, Pantalones, Accesorios? \n Escriba 'terminar' para salir del programa.")

    if(pedirItems=="terminar"){
        break;
    }

    miCarrito.push(pedirItems);

    } while (pedirItems=="" || isNaN(pedirItems))

    console.log(miCarrito);
    alert("Usted agregó estos items a su carrito " + miCarrito);
}

function mostrarCarrito(){
    for (let i = 0; i < miCarrito.length; i++) {
        console.log(miCarrito[i]);
    }
}

let persona = {
    nombre: usuario,
    edad:0,
    carrito: miCarrito,
    marcaDeRopaPreferida: "",
}
function elUsuario(){
    persona.edad = prompt("Ingrese su edad");
    persona.marcaDeRopaPreferida = prompt("¿Cual es su marca de ropa preferida?");
    console.log(persona);
}

validarContrasenia();
llenarCarrito();
mostrarCarrito();
elUsuario();


