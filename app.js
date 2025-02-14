//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];


function adicionarAmigo() {
    let input = document.getElementById("nomeAmigo");
    let nome = input.value.trim(); 


    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    amigos.push(nome); 
    input.value = ""; 
    atualizarLista(); 
}


function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; 


    for (let amigo of amigos) {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    }
}


function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Adicione pelo menos um amigo antes de sortear.");
        return;
    }

    let indiceSorteado = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceSorteado];

    document.getElementById("resultado").innerHTML = `🎉 O amigo secreto é: <strong>${amigoSorteado}</strong>!`;
}
