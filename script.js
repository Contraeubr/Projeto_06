function carregar() {
    var msg = window.document.getElementById('msg')
    var data = new Date()
    var hora = 22 //data.getHours()
    var res = document.getElementById('foto')
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    msg.innerHTML = `Agora sao ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //Bom dia
        //img.src = '/Aula14/manha.png'
        img.setAttribute('src', 'manha.png')
       // document.body.style.background = '#e2cd9f'
        document.body.style.backgroundImage = 'url(manha.jpg)'
    } else if (hora >= 12 && hora < 18) {
        //Boa tarde
        //img.src = '/Aula14/tarde.png'
        img.setAttribute('src', 'tarde.png')
        //document.body.style.background = '#b9846f'
        document.body.style.backgroundImage = 'url(tarde.jpg)'
    } else {
        //Boa noite
        //img.src = '/Aula14/noite.png'
        img.setAttribute('src', 'noite.png')
        //document.body.style.background = '#e2cd9f'
        document.body.style.backgroundImage = 'url(noite.jpg)'
    }
    res.appendChild(img)
}
