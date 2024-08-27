function carregar(){
    var data = new Date()
    var ano_atual = data.getFullYear()
    var ano_cliente = window.document.getElementById('txtano')
    var res = window.document.getElementById("res")

    if (ano_cliente.value.lenght == 0 || Number(ano_cliente.value) > ano_atual)
        {
        alert('ERRO')
        } else{
            var fsex = document.getElementsByName('radsex')
            idade = ano_atual - Number(ano_cliente.value)
        }

    var img = document.createElement("img")

    img.setAttribute("id", "photo")

    var genero = ''

    if(fsex[0].checked){
        genero = 'Homem'
        if(idade > 0 && idade < 15){
            img.setAttribute('src', 'bebe-M.jpg')
        } else if(idade < 21){
            img.setAttribute('src', 'jovem-M.jpg')
        } else if(idade < 50){
            img.setAttribute('src', 'adulto-M.jpeg')

        } else{
            img.setAttribute('src', 'idoso-M.png')

        }
           
    }else {
        genero = 'Mulher'
        if(idade > 0 && idade < 15){
            img.setAttribute('src', 'bebe-F.jpg')
        } else if(idade < 21){
            img.setAttribute('src', 'jovem-F.jpeg')
        } else if(idade < 50){
            img.setAttribute('src', 'adulto-F.jpeg')
        } else{
            img.setAttribute('src', 'idoso-M.jpeg')
        }
    }

   res.innerHTML = `detectamos ${genero} com ${idade} anos`
   res.appendChild(img)
}