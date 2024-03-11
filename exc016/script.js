function conta() {
    var inicio = Number(document.getElementById('inicio').value)
    var fim = Number(document.getElementById('fim').value)
    var passo = Number(document.getElementById('passo').value)
    var res = document.getElementById('res')

    if (inicio == '') {
        alert('Valor Inválido! Considerando início = 0')
        inicio = 0
    }
    
    if (passo <= 0) {
        alert('Valor Inválido! Considerando PASSO 1.')
        passo = 1
    }
    if (fim != '') {
        res.innerHTML = '<br>Contando...<br/>'
        if (inicio <= fim) {
            // contagem crescente
            while (inicio <= fim) {
                res.innerText += inicio
                inicio += passo
                res.innerHTML += ' \u{1F449}'
            }
        } else {
            // contagem regressiva
            while (fim <= inicio) {
                res.innerText += inicio
                inicio -= passo
                res.innerHTML += ' \u{1F449}'
            }
        }
        res.innerText += '\u{1F3C1}' 
    } else {
        res.innerHTML = '<br/> Impossível contar. <br/>'
    }
    
}
