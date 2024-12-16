
let productos = [];

const cargarProductos = async () => {
    try {
        const response = await fetch("../posts.json");
        productos = await response.json();

        //console.log(productos);
        mostrarProductos();
    } catch (error) {
        console.error(error);
    }
};

cargarProductos();

//MOSTRAR LOS PODUCTO EN LA PAGINA
const mostrarProductos = () => {
    const listadoProductos = document.querySelector('.productos');
            
        listadoProductos.innerHTML = "";

        productos.forEach((producto) => {
            const html = `
                <div class="articulo" data-id="${producto.id}">  
                    <img src="img/${producto.imagen}" class="producto-img" alt="${producto.nombre}">
                    <h3 class="articulo-nombre">${producto.nombre}</h3>
                    <p class="desc-articulo" id="info1"> ${producto.descripcion}</p>
                    <p>$ ${producto.precio}</p>
                    <button type="button" class="comprar">Comprar</button>
                </div>
            `;
            listadoProductos.innerHTML += html;

        });

};


//AGREGAR AL CARRITO

const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
//console.log(carrito, typeof carrito);

document.addEventListener('click', (event) => {
    
    if (event.target.classList.contains('comprar')) {
        const id = event.target.closest('div').dataset.id;
        //console.log(id);

        //cantidad del mismo producto
        const indice = carrito.findIndex((item) => item.id == id);
        //console.log(indice);

        if(indice == -1){

            const elemento = productos.find((producto) => producto.id == id);
            //console.log(elemento);

            const {nombre, precio} = elemento;

            const producto = {
                id: id,
                nombre: nombre,
                precio: precio,
                cantidad: 1,
            };
            carrito.push(producto);
        } else{
            const prod = carrito[indice];
            console.log(prod);
            prod.cantidad++;
        }

        localStorage.setItem("carrito", JSON.stringify(carrito));
    }
});






//CANTIDAD DE PRODUCTOS EN CARRITO
let contador = 0;
//console.log("largo de carrito objetos", carrito.length);
for (let i = 0; i < carrito.length; i++) {
    let cuanto = carrito[i].cantidad.valueOf();
    //console.log("el valor contenido es: ", cuanto);
    contador = contador + cuanto;
}
//console.log("la cantidad de pordictos en carrito es: ",contador);

const artcantidad = document.getElementById('cantidadart').innerHTML += contador;


