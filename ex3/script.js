
function contar(){
    var inicio = document.getElementById("inicio")
    var fim = document.getElementById("fim")
    var passo = document.getElementById("passo")
    var res = document.getElementById("res")
    var n_inicio = Number(inicio.value)
    var n_fim = Number(fim.value)
    var n_passo = Number(passo.value)
    res.innerHTML = 'contando '
    for(var c = n_inicio; c <= n_fim; c += n_passo){
        res.innerHTML += `${c} ` 
    }
    //res.innerHTML = `${n_inicio}`
}