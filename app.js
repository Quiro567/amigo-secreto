let amigos = [];

function adicionarAmigo() {
    const imput = document.getElementById("amigo");
    const nome = imput.value.trim();

    if (nome === "") {
        alert ("Por favor, digite um nome válido");
        return;
    }
    amigos.push(nome);
    atualizarLista();
    imput.value = ""; 
}

function atualizarLista() {
    const lista = document.getElementById ("listaAmigos");
    lista.innerHTML = ""; 
    amigos.forEach(nome => {
        const li = document.createElement("li")
        li.textContent = nome;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert ("Adicione pelo menos um nome para sortear.");
        return;
    }

    const sorteado = amigos[Math.floor(Math.random() * amigos.length)];
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<p>0 amigo secreto sorteado é: <strong>${sorteado}</strong></p>`;
    resultado.style.display = "block"

let amigos = [];
}

function adicionarAmigo() {
    const imput = document.getElementById("amigo");
    const nome = imput.value.trim();

    if (nome === "") {
        alert ("Por favor, digite um nome válido");
        return;
    }
    amigos.push(nome);
    atualizarLista();
    imput.value = ""; 
}

function atualizarLista() {
    const lista = document.getElementById ("listaAmigos");
    lista.innerHTML = ""; 
    amigos.forEach(nome => {
        const li = document.createElement("li")
        li.textContent = nome;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert ("Adicione pelo menos um nome para sortear.");
        return;
    }
    const sorteado = amigos[Math.floor(Math.random() * amigos.length)];
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<p>0 amigo secreto sorteado é: <strong>${sorteado}</strong></p>`;
    resultado.style.display = "block";
}