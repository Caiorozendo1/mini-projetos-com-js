function clicar(){
    const resp = window.document.getElementById('resp')
    const nome = window.document.getElementById('txtn')
    const a = window.document.getElementById('txtalt')
    const p = window.document.getElementById('txtpes')
    const peso = Number(p.value)
    const altura = Number(a.value)
    let imc =  peso / altura ** 2
    resp.innerHTML = ''
    if(nome.value  == '' || a.value == '' || p.value == ''){
        window.alert('[ERRO] preencha todos os campos pfv!')
    }else{
    if(imc < 18.5){
        resp.innerHTML =  `${nome.value} seu IMC é ${imc.toFixed(1)} e você está classificado(a) com magreza.`
    } else if(imc >= 18.5 && imc <= 24.9){
        resp.innerHTML =  `${nome.value} seu IMC é ${imc.toFixed(1)} e você está classificado(a) com o peso normal.`
    }else if(imc >= 25 && imc <= 29.9){
        resp.innerHTML =  `${nome.value} seu IMC é ${imc.toFixed(1)} e você está classificado(a) com sobrepeso.`
    }else if(imc >= 30 && imc <= 34.9){
        resp.innerHTML =  `${nome.value} seu IMC é ${imc.toFixed(1)} e você está classificado(a) com obesidade grau 1.`
    }else if(imc >= 35 && imc <= 40){
        resp.innerHTML =  `${nome.value} seu IMC é ${imc.toFixed(1)} e você está classificado(a) com obesidade grau 2.`
    }else{
        resp.innerHTML =  `${nome.value} seu IMC é ${imc.toFixed(1)} e você está classificado(a) com obesidade grau 3.`
    }
}
    
}