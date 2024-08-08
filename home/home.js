document.getElementById('btn-cadastrar-vaga').addEventListener('click', function (event) {
    const cadastrar_vaga = document.querySelector('.cadastrar-vaga');
    const overlay = document.querySelector('.overlay')

    overlay.classList.add('show')
    cadastrar_vaga.classList.add('show')
});

document.querySelector('#fechar').addEventListener('click', function (event) {
    const cadastrar_vaga = document.querySelector('.cadastrar-vaga');
    const overlay = document.querySelector('.overlay')

    overlay.classList.remove('show')
    cadastrar_vaga.classList.remove('show')
});

document.querySelector('.cadastrar-vaga').addEventListener('submit', function (event) {
    const cadastrar_vaga = document.querySelector('.cadastrar-vaga');
    const overlay = document.querySelector('.overlay')

    overlay.classList.remove('show')
    cadastrar_vaga.classList.remove('show')
    
    alert('Vaga cadastrada com sucesso!')
});

document.querySelectorAll('.vaga').forEach(vaga => {
    vaga.addEventListener('click', () => {
        vaga.classList.toggle('expanded');
        const applyButton = vaga.querySelector('.apply-button');

        if (vaga.classList.contains('expanded')) {
            applyButton.style.display = 'block'; // Exibir botão
        } else {
            applyButton.style.display = 'none'; // Ocultar botão
        }
    });
});

document.querySelector('btn-candidatar-se').addEventListener('click', function (event) {
    alert('Teste')
});

//URL do backend
const apiUrl = 'URL_BACKEND';

// Função para buscar dados do backend
async function fetchVagas() {
    try {
        const response = await fetch(apiUrl);
        const vagas = await response.json();
        renderVagas(vagas);
    } catch (error) {
        alert('Erro ao buscar vagas!')
    }
}

// Função para renderizar as vagas no DOM
function renderVagas(vagas) {
    const main = document.querySelector('main');

    vagas.forEach(vaga => {
        const vagaDiv = document.createElement('div');
        vagaDiv.classList.add('vaga');

        vagaDiv.innerHTML = `
            <div class="cabecalho">
                <img src="imagens/logo.png" alt="Logo da empresa" class="logo">
                <div class="container-nomes-vaga">
                    <h2>${vaga.cargo}</h2>
                    <p>${vaga.nome_empresa}</p>
                </div>
            </div>
            <div class="descricao">
                ${vaga.descricao}
            </div>
            <button class="btn-candidatar-se">Candidatar-se para esta vaga</button>
        `;

        main.appendChild(vagaDiv);
    });
}

// Chama a função para buscar e renderizar as vagas quando a página carregar
document.addEventListener('DOMContentLoaded', fetchVagas);

