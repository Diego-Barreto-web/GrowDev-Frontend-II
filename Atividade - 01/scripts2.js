let cliques = 0;

function incrementar() {
    cliques++;
    const paragrafo = document.getElementById("contador");
    paragrafo.innerText = `O contador está com ${cliques} cliques`;
    paragrafo.style.display = 'block';
}

function zerar() {
    cliques = 0;
    document.getElementById("contador").style.display = 'none';
}