carrito = JSON.parse(localStorage.getItem("carrito")) || [];

console.log(carrito);

const items = document.querySelector(".items");

items.innerHTML = "";

carrito.forEach((item) => {
    const html = `
        <tr data-id="${item.id}">
            <td >${item.nombre}</td>
            <td><button> - </button></td>
            <td>${item.cantidad}</td>
            <td><button> + </button></td>
            <td>${item.precio}</td>
            <td>${item.cantidad * item.precio}</td>
            <td><input class="elim" type="image" src="img/trash.png" alt="eliminar"></td>
        </tr>
    `;
    items.innerHTML += html;
    
});




document.addEventListener('click', (event) => {
    
    //console.log(event.target);

    if (event.target.classList.contains("elim")){
        //console.log("entro2");
        const id = event.target.closest('tr').dataset.id;
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


