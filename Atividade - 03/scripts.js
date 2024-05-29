document.getElementById('formulario').addEventListener('submit', function(event){
    event.preventDefault();
    
    const form = event.target;
    const nome = form.nome.value;
    const endereco = form.endereco.value;
    const cidade = form.cidade.value;
    const estado = form.estado.value;
    const naturezaCargo = form.natureza_cargo.value;
    const areaInteresse = Array.from(form.area_interesse)
                               .filter(checkbox => checkbox.checked)
                               .map(checkbox => checkbox.checked);
    const miniCurriculo = form.mini_curriculo.value;


    if (areaInteresse.length === 0){
        alert('Selecione ao menos uma área de interesse');
        return;
    }

    console.log('Nome:', nome);
    console.log('Endereço:', endereco);
    console.log('Cidade:', cidade);
    console.log('Estado:', estado);
    console.log('Natureza do cargo:', naturezaCargo);
    console.log('Áreas de interesse:', areaInteresse);
    console.log('Mini currículo:', miniCurriculo);


});