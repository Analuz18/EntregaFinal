
/*Ingreso de comentario en formulario*/
 let nombreUsuario = prompt("Ingrese su nombre completo");
 let mailUsuario = prompt("Ingrese su mail");
 let comentarioUsuario = prompt("Ingrese su opinion");

 if ((nombreUsuario !="") && (mailUsuario!= "") && (comentarioUsuario != "")) {
     console.log ("Gracias " + nombreUsuario + " por dejarnos tu opinion");
}
 else{
    console.log ("Debes ingresar tu opinion");
 }

/*Carrito de compras*/

let producto= prompt("Ingrese el producto que deseas comprar \nBari\nMarsalla\nBerlin Topo\nBerlin Vison");
let precio= 0
while (producto != "salir"){
    switch (producto){
        case "Bari":
        case "BARI":
        console.log("Su precio es de $55000");
        precio=precio+ 55000;
        break;
        case "Marsalla":
        case "MARSALLA":
        console.log("Su precio es de $58000");
        precio=precio+ 58000;
        break;
        case "Berlin Topo":
        case "BERLIN TOPO":
        console.log("Su precio es de $60000");
        precio=precio+ 60000;
        break;
        case "Berlin Vison":
        case "BERLIN VISON":
        console.log("Su precio es de $60000");
        precio=precio+ 60000;
        break;
    }
    producto= prompt("Ingrese el producto que deseas comprar (Escriba salir para finalizar)");
}

console.log ("Total a pagar $"+precio)

let descuento= prompt("Ingrese su cupon de descuento");
let cupon = "25";

if (descuento==25){
    console.log ("El total con el descuento aplicado es de $" + (precio-descuento))
} else {
    console.log("El cupon ingresado es incorrecto")
}


