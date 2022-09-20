
//  /*Ingreso de comentario en formulario*/
//  let nombreUsuario = prompt("Ingrese su nombre completo");
//  let mailUsuario = prompt("Ingrese su mail");
//  let comentarioUsuario = prompt("Ingrese su opinion");

//   if ((nombreUsuario !="") && (mailUsuario!= "") && (comentarioUsuario != "")) {
//       console.log ("Gracias " + nombreUsuario + " por dejarnos tu opinion");
//  }
//  else{
//     console.log ("Debes ingresar tu opinion");
//  }

//  /*Carrito de compras*/

//  let producto= prompt("Ingrese el producto que deseas comprar \nBari\nMarsalla\nBerlin Topo\nBerlin Vison");
//  let precio= 0
//  while (producto != "salir"){
//      switch (producto){
//          case "Bari":
//          case "BARI":         console.log("Su precio es de $55000");
//          precio=precio+ 55000;
//          break;
//          case "Marsalla":
//          case "MARSALLA":
//          console.log("Su precio es de $58000");
//          precio=precio+ 58000;
//          break;
//          case "Berlin Topo":
//          case "BERLIN TOPO":
//          console.log("Su precio es de $60000");
//          precio=precio+ 60000;
//          break;
//          case "Berlin Vison":
//          case "BERLIN VISON":
//          console.log("Su precio es de $60000");
//          precio=precio+ 60000;
//          break;
//      }
//      producto= prompt("Ingrese el producto que deseas comprar (Escriba salir para finalizar)");
//  }

//  console.log ("Total a pagar $"+precio)

//  let descuento= prompt("Ingrese su cupon de descuento");
//  let cupon = "25";

//  if (descuento==25){
//      console.log ("El total con el descuento aplicado es de $" + (precio-descuento))
//  } else {
//     console.log("El cupon ingresado es incorrecto")
//  }

// /*Lista de precios de todos los productos ubicados en la pagina todos.html*/

// const articulo= [
//     {
//         sku:"1",
//         titulo:"Sillon de 2 cuerpos Bari",
//         precio: 55000
//     },
//     {
//         sku:"2",
//         titulo:"Sillon de 2 cuerpos Marsalla",
//         precio: 58000
//     },
//     {
//         sku:"3",
//         titulo:"Sillon de 2 cuerpos Berlin Topo",
//         precio: 60000
//     },
//     {
//         sku:"4",
//         titulo:"Sillon de 2 cuerpos Berlin Vison",
//         precio: 60000
//     }
// ];
// for(const sku of articulo){
//     console.log(sku.titulo);
//     console.log(sku.precio);
// }
// /*Arrays*/
// class Producto {
//     constructor(nombre, precio) {
//         this.nombre  = nombre.toUpperCase();
//         this.precio  = parseFloat(precio);
//         this.vendido = false;
//     }
//     sumaIva() {
//         this.precio = this.precio * 1.21;
//     }
// }
// const productos = [];
// productos.push(new Producto("sillon 2 cuerpos Marsalla", "58000"));
// productos.push(new Producto("sillon 2 cuerpos Berlin Vison", "60000"));
// productos.push(new Producto("sillon 2 cuerpos Berlin Topo", "60000"));
// console.log("lista de productos:");
// console.log(productos);
// for (const producto of productos)
//     producto.sumaIva();

const Clickbutton = document.querySelectorAll ('.button')
const tbody = document.querySelector('.tbody')
let carrito = []


Clickbutton.forEach(btn =>
    btn.addEventListener('click', addToCarritoItem)
    )

    function addToCarritoItem(e) {
        const button = e.target
        const item = button.closed('.card')
        const Itemtitle = item.querySelector('.card-title').textContent;
        const ItemPrecio = item.querySelector('.precio').textContent;
        
        const newCarrito = {
            title: Itemtitle,
            precio: ItemPrecio,
            cantidad: 1
        }
        addItemCarrito(newItem)
    }

    function addItemCarrito (newItem) {

        const inputElemnto = tbody.getElementsByClassName ('input__elemento')
        
      for (let i = 0; i < carrito.length ; i++ ) {
        if (carrito[i].title.trim()=== nemItem.title.trim()){
            carrito[i].cantidad ++;
            const inputValue = inputElemnto[i]
            inputValue.value ++;
            console.log(carrito)
            return null;

        }
      }
        carrito.push(newItem)
        renderCarrito()
    }

    function renderCarrito() {

        tbody.innerHTML = ''
        carrito.map (item => {
            const tr = document.createElement('tr');
            tr.classList.add('ItemCarrito');
            const Content = '
            <th scope="row">1</th>
            <td class="table_productos">$(item.precio)</td>
            <td class="table_precio"><p>$1</p></td>
            <td class="table_cantidad">
                <input type="number" min="1" value="$(item.cantidad)" class="input__elemento">
                <button class="delete btn btn-danger">X</button>
            </td>'
            
        tr.innerHTML = Content;
        tbody.append(tr)
        })
    }
       
    



















