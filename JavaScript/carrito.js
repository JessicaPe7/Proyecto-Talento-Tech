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
                <input type="image" src="img/minus.png" alt="menos" class="menos ico2">
                <p id="cant">${item.cantidad}</p>
                <input type="image" src="img/plus.png" alt="mas" class="mas ico2">
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
            window.location.href = window.location.href;
            
        }
        localStorage.setItem("carrito", JSON.stringify(carrito));
        
    }) 



//AGREGAR UN PRODUCTO MAS +
document.addEventListener('click', (event) => {
    if(event.target.classList.contains("mas")){
        console.log("entro");

        const idboton = event.target.closest('article').dataset.id;
        //console.log(idboton);

        const indiceb = carrito.findIndex((item) => item.id == idboton);
        //console.log(indiceb);

        const mas = carrito[indiceb];
        //console.log("cantidad que tiene cant", mas);
        mas.cantidad++;
        

        localStorage.setItem("carrito", JSON.stringify(carrito));
        window.location.href = window.location.href;
        //console.log("tiene:", carrito);
    }
})


//SACAR UN PRODUCTO - 
document.addEventListener('click', (event) => {
    if(event.target.classList.contains("menos")){
        console.log("entro");

        const idbotonm = event.target.closest('article').dataset.id;
        console.log(idbotonm);

        const indicebm = carrito.findIndex((item) => item.id == idbotonm);
        console.log(indicebm);

        if(carrito[indicebm].cantidad != 1){
            const menos = carrito[indicebm];
            console.log("cantidad que tiene cant", menos);
            menos.cantidad--;
        }else{
            carrito.splice(indicebm, 1); 
        }
        
        
        localStorage.setItem("carrito", JSON.stringify(carrito));
        window.location.href = window.location.href;
        //console.log("tiene:", carrito);
    }
})
