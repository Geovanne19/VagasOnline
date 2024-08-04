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
