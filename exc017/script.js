function geraTabuada() {
    num = Number(document.getElementById('num').value)
    res = document.getElementById('res')
    if (num != '') {
        res.innerHTML = ''
        for(i=1; i<=10; i++) {
            let item = document.createElement('option')
            item.text = `${num} x ${i} = ${num * i}`
            item.value = `tab${i}`
            res.appendChild(item)
        }
    } else {
        alert('Valor INVÁLIDO! Tente Novamente.')
    }
    
}
