carrito = JSON.parse(localStorage.getItem("carrito")) || [];

console.log("tiene:", carrito);

if(carrito.length == 0){
    const aviso = document.querySelector(".p");
    const p = `
        <h2 class="texto2 p">El carrito esta vacio</h2>
    `;
    console.log(aviso);
    console.log(p);
    aviso.innerHTML += p;
}

const items = document.querySelector(".items");

items.innerHTML = "";

carrito.forEach((item) => {
    const html = `
        <article data-id="${item.id}" class="items-carrito">
            
            <div class="titulo-borrar">
                <h3 class="carrito-nombre">${item.nombre}</h3>
                <input class="elim ico2" type="image" src="img/trash.png" alt="eliminar">
            </div>

            <div class="item-especial" id="agregar">
                <input type="image" src="/img/minus.png" class="menos ico2">
                ${item.cantidad}
                <input type="image" src="/img/plus.png" class="mas ico2">
            </div>

            <div class="info-precio">
                <p>$${item.precio}</p>
                <p>$${item.cantidad * item.precio}</p> 
            </div>
            
            
        </article>
        
    `;
    items.innerHTML += html;
    
    
});




//calcula el total
let totalcompra = 0;

for (let i = 0; i < carrito.length; i++) {

    let cantidad = carrito[i].cantidad.valueOf();
    let precio = carrito[i].precio.valueOf();
    totalcompra = totalcompra + (cantidad * precio);

}
const final = document.getElementById('total-final').innerHTML += "$";
const final2 = document.getElementById('total-final').innerHTML += totalcompra



//producto a la basura
document.addEventListener('click', (event) => {
    
    if (event.target.classList.contains("elim")){

        const id = event.target.closest('article').dataset.id;

        const elemento2 = carrito.findIndex((item) => item.id == id);
            
        if (elemento2 !== -1) {
            carrito.splice(elemento2, 1);            
        }
        console.log(carrito);    
        location.reload();
    }
    localStorage.setItem("carrito", JSON.stringify(carrito));
    
    
}) 


