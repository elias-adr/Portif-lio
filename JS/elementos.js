//  Capturar todos os elementos necessários do HTML
const form = document.querySelector('form');
const inputNome = document.querySelector('#nome');
const inputCargo = document.querySelector('#cargo_desejo');
const inputResumo = document.querySelector('#resumo_profissional');
const areaVisualizacao = document.querySelector('#visualizacao');

const btnSalvar = document.querySelector('#btn-salvar');
const btnTema = document.querySelector('#btn-tema');

// Função responsável por desenhar as informações no ecrã de forma segura
function atualizarVisualizacao(nome, cargo, resumo) {

    areaVisualizacao.innerHTML = '';


    const h3Nome = document.createElement('h3');
    h3Nome.textContent = nome || 'O seu Nome';

    const pCargo = document.createElement('p');
    pCargo.textContent = cargo || 'Cargo Desejado';
    pCargo.style.fontWeight = 'bold';
    pCargo.style.color = '#555';

    const pResumo = document.createElement('p');
    pResumo.textContent = resumo || 'O seu resumo profissional aparecerá aqui.';
    pResumo.style.marginTop = '12px';


    areaVisualizacao.appendChild(h3Nome);
    areaVisualizacao.appendChild(pCargo);
    areaVisualizacao.appendChild(pResumo);
}

//  Função para recuperar os dados se o utilizador atualizar a página
function carregarDadosSalvos() {

    const nomeSalvo = localStorage.getItem('cv_nome') || '';
    const cargoSalvo = localStorage.getItem('cv_cargo') || '';
    const resumoSalvo = localStorage.getItem('cv_resumo') || '';


    inputNome.value = nomeSalvo;
    inputCargo.value = cargoSalvo;
    inputResumo.value = resumoSalvo;


    atualizarVisualizacao(nomeSalvo, cargoSalvo, resumoSalvo);
}


btnSalvar.addEventListener('click', () => {
    const nomeDigitado = inputNome.value;
    const cargoDigitado = inputCargo.value;
    const resumoDigitado = inputResumo.value;


    atualizarVisualizacao(nomeDigitado, cargoDigitado, resumoDigitado);


    localStorage.setItem('cv_nome', nomeDigitado);
    localStorage.setItem('cv_cargo', cargoDigitado);
    localStorage.setItem('cv_resumo', resumoDigitado);
});


form.addEventListener('reset', () => {

    atualizarVisualizacao('', '', '');


    localStorage.removeItem('cv_nome');
    localStorage.removeItem('cv_cargo');
    localStorage.removeItem('cv_resumo');
});

carregarDadosSalvos();