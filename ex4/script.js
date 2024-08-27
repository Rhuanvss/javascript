function tabuada(){
    let n = document.getElementById("n")
    let num = Number(n.value)
    let res = document.getElementById("res")
    let c = 1
    let tabuada = document.getElementById("tabuada")
    tabuada.innerHTML = ''
    while (c <= 10){
        let item = document.createElement('option')
        item.text = ` ${num} x ${c} = ${num * c }`
        tabuada.appendChild(item)
        c++
    }
}