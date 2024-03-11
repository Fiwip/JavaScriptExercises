var agora = new Date()
// var hora = agora.getHours()
var hora = 20
var d1 = document.getElementById('d1')
d1.innerText = `Agora são ${hora} horas.`
d1.innerHTML += '<p></p>'
var img = document.createElement("img")


var rodape = document.getElementById('rodape')
if (hora < 12) {
    img.src = 'fotoamanhã.png'
    var h1 = document.getElementById('h1')
    h1.style.color = 'black'
    rodape.style.color = 'black'

} else if (hora < 18) {
    img.src = 'fototarde.png'
    document.body.style.background = 'rgb(254, 121, 31)'
    
} else if (hora < 24) {
    img.src = 'fotonoite.png'
    document.body.style.background = 'rgb(46, 60, 83)'
}
img.style.width = "250px"
img.style.height = "250px"
document.getElementById('imagem').appendChild(img)
