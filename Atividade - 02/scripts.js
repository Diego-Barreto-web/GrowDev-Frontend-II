document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.style.backgroundColor = '#F39C12';
        card.style.borderRadius = '10px';
        card.style.padding = '20px';
        card.style.textAlign = 'center';
        card.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
    });

    const titulos = document.querySelectorAll('.titulo-card');
    titulos.forEach(titulo => {
        titulo.innerText = 'Meu Card';
        titulo.style.color = '#FFF';
    });

    const descricoes = document.querySelectorAll('.descricao-card');
    descricoes.forEach(descricao => {
        descricao.innerText = 'Descrição modificada pelo JavaScript';
        descricao.style.color = '#FFF';
    });

    const botoesEditar = document.querySelectorAll('.botao-editar');
    botoesEditar.forEach(botao => {
        botao.style.backgroundColor = '#27AE60';
        botao.onclick = editarCard;
    });

    const botoesApagar = document.querySelectorAll('.botao-apagar');
    botoesApagar.forEach(botao => {
        botao.style.backgroundColor = '#E74C3C';
        botao.onclick = apagarCard;
    });
});

function editarCard() {
    alert("Clicou em Editar!");
}

function apagarCard() {
    if (confirm("Tem certeza que deseja apagar este card?")) {
        alert("Confirmado!");
    } else {
        alert("Cancelou!");
    }
}