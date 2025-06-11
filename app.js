function sortear(){
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    if (de >= ate) {
        alert('O valor "de" deve ser menor que o valor "até".');
        return;
    }

    if (quantidade <= 0 || quantidade > (ate - de + 1)) {
        alert('A quantidade de números sorteados deve ser maior que 0 e menor ou igual à diferença entre "até" e "de".');
        return;
    }

    let sorteados = [];
    let numero;
    
    for(i = 0; i < quantidade; i++) {
        numero = obterNumeroAleatorio(de, ate);

        while(sorteados.includes(numero)) {
            numero = obterNumeroAleatorio(de, ate);
        }

        sorteados.push(numero);
    }

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${sorteados}</label>`;

    alterarStatusBotao(true);
}

function obterNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alterarStatusBotao(habilitar) {
    let botao = document.getElementById('btn-reiniciar');
    if (habilitar) {
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    } else {
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
}

function reiniciar() {
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
    alterarStatusBotao(false);
}