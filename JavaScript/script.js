
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

