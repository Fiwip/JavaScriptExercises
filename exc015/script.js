function verificar() {
    var data1 = new Date()
    var ano_atual = data1.getFullYear()
    var nasc = document.getElementById('ano').value


    if (nasc > ano_atual || nasc.length == 0) {
        alert('Verifique os dados e tente novamente!')

        
    } else {
        var sexo = ''
        var idade = ano_atual - Number(nasc)
        var fsex = document.getElementsByName('radsex')
        var res = document.getElementById('res')
        var img = document.createElement("img")
        img.setAttribute('id', 'foto')


        if (fsex[0].checked) {
            var sexo = 'Homem'
            if (idade < 10) {
                img.setAttribute('src', 'bebe-m.png')
            } else if (idade < 25) {
                img.setAttribute('src', 'jovem-m.png')
            } else if (idade < 60) {
                img.setAttribute('src', 'adulto-m.png')
            } else {
                img.setAttribute('src', 'idoso-m.png')
            }



        } else if (fsex[1].checked) {
            var sexo = 'Mulher'
            if (idade < 10) {
                img.setAttribute('src', 'bebe-f.png')
            } else if (idade < 25) {
                img.setAttribute('src', 'jovem-f.png')
            } else if (idade < 60) {
                img.setAttribute('src', 'adulto-f.png')
            } else {
                img.setAttribute('src', 'idoso-f.png')
            }


        } else{
            erro()
        }

        res.style.textAlign = 'center'
        res.innerText = (`Detectamos ${sexo} com ${idade} anos.`)
        img.style.width = '250px'
        img.style.height = '250px'
        res.appendChild(img)
    }       
}


function erro() {
    alert('ERRO!')
}