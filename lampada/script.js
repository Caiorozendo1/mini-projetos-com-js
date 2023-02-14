let img = document.querySelector('#image') 
let turnon = document.getElementById('b1')
let turnoff = document.getElementById('b2')
function lampadaquebrada(){
    return img.src.indexOf('quebrada') > -1
}

function lampon(){
    if(!lampadaquebrada()){
    img.src = 'ligada.jpg'
    }
}
function lampoff(){
    if(!lampadaquebrada()){
    img.src = 'desligada.jpg'
    }
}
function lampbroken(){
    img.src = 'quebrada.jpg'
}

turnon.addEventListener('click', lampon )
turnoff.addEventListener('click', lampoff )
img.addEventListener('mouseover', lampon)
img.addEventListener('mouseleave', lampoff)
img.addEventListener('dblclick', lampbroken)
