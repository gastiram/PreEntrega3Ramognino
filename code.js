let usuario = prompt("Ingrese su nombre de usuario.")
const contraElegida = "12345";
let y = 1
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


