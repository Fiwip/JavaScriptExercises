let numeros = []
res = document.getElementById('res')


function adicionaNum() {
    res.innerText = ''
    let num = Number(document.getElementById('num').value)
    if (1 <= num && num <= 100 && numeros.indexOf(num) == -1) {
        numeros.push(num)
        let numad = document.getElementById('numad')
        let adc = document.createElement('option')
        adc.text = `Valor ${num} adicionado.`
        numad.appendChild(adc)
        

    } else {
        alert('Valor Inválido ou já encontrado na lista, Tente Novamente')
    }
    var num1 = document.getElementById('num')
    num1.value = ''
    num1.focus()
    
    
}
function finaliza() {
    if (numeros.length == 0) {
        alert('Adicione valores antes de finalizar!')
    } else {
        var soma = 0
        res.innerText = ''
        numeros.sort()
        var tamanho = numeros.length
        res.innerHTML += `Ao todo, foram adicionados ${tamanho} números<br>`
        res.innerHTML += `O maior valor informado foi ${numeros[tamanho - 1]}.<br>`
        res.innerHTML += `O menor valor informado foi ${numeros[0]}<br>`
        for (let c in numeros) {
            soma += numeros[c]
        }
        res.innerHTML += `Somando todos os valores, temos ${soma}<br>`
        res.innerHTML += `A média dos valores digitados é ${soma/tamanho}<br>`
    }
}
