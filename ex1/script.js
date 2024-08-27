function carregar( ){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')
    var data = new Date()
    var horas = data.getHours()
    msg.innerHTML = `agora são ${horas} horas`
    if (horas >= 0 && horas < 12){
        img.src = 'amanhecer.jpg'
    } else if(horas >= 12 && horas < 18) {
        img.src ='entardecer.jpg'
    } else{
        img.src = 'noite.jpg'
    }
}

