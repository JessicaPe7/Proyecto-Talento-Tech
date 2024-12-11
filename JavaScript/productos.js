//productos
const productos = [
    {   id: 1, 
        nombre: "Vinilo blanco",
        imagen: "vinilo-blanco.jpeg", 
        descripcion: "Plancha de m2 de sticker en vinilo blanco", 
        precio: 31.182, 
        stock: 10
    },
    {   id: 2, 
        nombre: "Vinilo tornasolado", 
        imagen: "vinilo tornasolado.jpeg",
        descripcion: "Plancha de m2 de sticker en vinilo tornasolado", 
        precio: 43.455, 
        stock: 10 
    },
    {   id: 3, 
        nombre: "Vinilo glitter", 
        imagen: "vinilo gliter.jpeg",
        descripcion: "Plancha de m2 de sticker en vinilo glitter", 
        precio: 43.455, 
        stock: 10 
    },
    {   id: 4, 
        nombre: "Vinilo clear",
        imagen: "vinio transparente.jpeg", 
        descripcion: "Plancha de m2 de sticker en vinilo clear", 
        precio: 30.545, 
        stock: 10 
    },
    {   id: 5, 
        nombre: "Bolsa frizelina", 
        imagen: "bolsa friselina2.jpg",
        descripcion: "Bolsa frizelina estampada 50 un. ", 
        precio: 31.182, 
        stock: 10 
    },
    {   id: 6, 
        nombre: "Botella America", 
        imagen: "botella america.jpeg",
        descripcion: "Botella estampada con tu logo 50 uni.", 
        precio: 31.182, 
        stock: 10 
    },
    {   id: 7, 
        nombre: "Botella de acero", 
        imagen: "botella acero.jpeg",
        descripcion: "Botella estampada con tu logo 50 uni.", 
        precio: 31.182, 
        stock: 10 
    },
];

console.log(productos);

const listadoProductos = document.querySelector('.productos');

productos.forEach(producto => {
    const html = `
        <div class="articulo" data-id="${producto.id}">  
            <img src="../img/${producto.imagen}" class="producto-img" alt="${producto.nombre}">
            <h3 class="articulo-nombre">${producto.nombre}</h3>
            <p class="desc-articulo" id="info1"> ${producto.descripcion}</p>
            <p>$ ${producto.precio}</p>
            <button type="button" class="comprar">Comprar</button>
        </div>
    `;
    listadoProductos.innerHTML += html;
});


//agregar al carrito

const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
console.log(carrito, typeof carrito);

document.addEventListener('click', (event) => {
    if (event.target.classList.contains('comprar')) {
        const id = event.target.closest('div').dataset.id;
        console.log(id);

        //cantidad del mismo producto
        const indice = carrito.findIndex((item) => item.id == id);
        if(indice == -1){

            const elemento = productos.find((producto) => producto.id == id);
            console.log(elemento);

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
            prod.cantidad++;
        }

        localStorage.setItem("carrito", JSON.stringify(carrito));
    }
});


