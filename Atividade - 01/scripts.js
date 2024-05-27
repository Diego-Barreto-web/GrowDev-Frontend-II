function mudarTexto() {
    const nome = prompt("Digite o seu nome:");
    if (nome) {
        document.getElementById("mensagem").innerText = `E aí ${nome}! Você está deixando o seu site dinâmico.`;
    }
}