
//validar datos del form
const formulario = document.getElementById("formu");

formulario.addEventListener("submit", (event) =>{
    
    var bien = true;

    const nombre = document.getElementById("nombre-completo");
    //console.log(nombre.value);
    if (nombre.value.length < 4){
        nombre.style.border = "2px solid red";
        const errorNombre = document.getElementById("error1");
        errorNombre.textContent = "Debe tener mas de 4 caracteres";
        bien = false;
    }else{
        bien = true;
        document.getElementById("error1").style.display = "none";
    }


    const numero = document.getElementById("tel");
    //console.log(numero.value.length);
    if (numero.value.length < 7 || numero.value.length > 12){
        numero.style.border = "2px solid red";
        const errorNumero = document.getElementById("error2");
        errorNumero.textContent = "Ingrese un numero valido";
        bien = false;
    } else{
        bien = true;
        document.getElementById("error2").style.display = "none";
    }


    const email = document.getElementById("email");
    //console.log(email.value);
    var validoemail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (validoemail.test(email.value)) { 
        bien = true;
        document.getElementById("error3").style.display = "none";
    }else{
        email.style.border = "2px solid red";
        const erroremail = document.getElementById("error3");
        erroremail.textContent = "Ingrese un e-mail valido";
        bien = false;
    }

    if(bien){
        const formenviado = document.getElementById("correcto");
        formenviado.textContent = "A la brevedad nos pondremos en contacto con usted";
    }else{
        event.preventDefault();
    }
})


































/* BOTON DE MAS INFO
function descp(ubicacion, contenido){
    var nuevoElemento = document.createElement("p");
    nuevoElemento.innerHTML = contenido;
    
    if(ubicacion == 1){
        document.getElementById("info1").appendChild(nuevoElemento);
    }else if(ubicacion ==2){
        document.getElementById("info2").appendChild(nuevoElemento);
    }else{
        return 0;
    }

}


document.addEventListener('click', (event) => {
    if (event.target.classList.contains('boton')) {
        const id = event.target.closest('div').dataset.id;

        const elemento = productos.find((productos) => productos.id == id);
        
        //console.log(elemento);
        console.log(id);
        const {descripcion} = elemento;
        //console.log({descripcion});
        descp(id, descripcion);
        

    }

});



function clicks2(){
    let contador = 0;

        document.getElementsByClassName('boton').addEventListener('click', function() {
            contador++;
            if (contador === 2) {
                document.getElementById('nuevoElemento').style.display = 'none';
            }
        });
    }

function clic(){
    document.getElementsByClassName('boton').addEventListener('click', function() {
        var parrafo = document.getElementById('nuevoElemento');
        if (parrafo.style.display === 'none') {
            parrafo.style.display = 'block';
        } else {
            parrafo.style.display = 'none';
        }
    });
}*/