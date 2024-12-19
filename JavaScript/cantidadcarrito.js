//CANTIDAD DE PRODUCTOS EN CARRITO


/* fetch('url_del_servidor')
  .then(response => response.text())
  .then(data => {
    document.getElementById('elemento').innerHTML = data;
  });fetch('url_del_servidor')
  .then(response => response.text())
  .then(data => {
    document.getElementById('elemento').innerHTML = data;
  });
 */


carrito = JSON.parse(localStorage.getItem("carrito")) || [];

let contador = 0;
//console.log("largo de carrito objetos", carrito.length);
for (let i = 0; i < carrito.length; i++) {

    let cuanto = carrito[i].cantidad.valueOf();
    //console.log("el valor contenido es: ", cuanto);
    contador = contador + cuanto;

}

//console.log("la cantidad de pordictos en carrito es: ",contador);

const artcantidad = document.getElementById('cantidadart').innerHTML += contador;
