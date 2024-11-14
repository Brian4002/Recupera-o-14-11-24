const form = document.getElementById('formulario');
const campo = document.getElementById('campo');
const lista = document.getElementById('lista');
const erroMsg = document.getElementById('erro-msg');


function adicionar(event) {
    event.preventDefault();  

    const Texto = campo.value.trim();
    if (Texto === "") {
        erroMsg.style.display = "block";  
        return;
    }

    erroMsg.style.display = "none";  

    
    const novotxt = document.createElement('li');
    novotxt.textContent = Texto;

    lista.appendChild(novotxt);
    //Solano
    
    campo.value = "";
}


form.addEventListener('submit', adicionar);
