carrito = JSON.parse(localStorage.getItem("carrito")) || [];

console.log("tiene:", carrito);

if(carrito.length == 0){
    const aviso = document.querySelector(".p");
    const p = `
        <h2 class="texto2">El carrito esta vacio</h2>
    `;
    console.log(aviso);
    console.log(p);
    aviso.innerHTML += p;
}

const items = document.querySelector(".items");

items.innerHTML = "";

carrito.forEach((item) => {
    const html = `
        <ul data-id="${item.id}" class="items-carrito">
            <li class="info-carrito">${item.nombre}</li>
            <li class="item-especial"><input type="image" src="/img/plus.png" class="ico2">${item.cantidad}<input type="image" src="/img/minus.png" class="ico2"></li>
            <li>${item.precio}</li>
            <li>${item.cantidad * item.precio}</li>
            <input class="elim" type="image" src="img/trash.png" alt="eliminar">
        </ul>
    `;
    items.innerHTML += html;
    
});




document.addEventListener('click', (event) => {
    
    //console.log(event.target);

    if (event.target.classList.contains("elim")){
        //console.log("entro2");
        const id = event.target.closest('ul').dataset.id;
        //console.log(id);

        const elemento2 = carrito.findIndex((item) => item.id == id);
        console.log("el indice del elemento es: ", elemento2);
            
        if (elemento2 !== -1) {
            carrito.splice(elemento2, 1);            
        }
        console.log(carrito);    
        location.reload();
    }
    localStorage.setItem("carrito", JSON.stringify(carrito));
    
    
}) 


