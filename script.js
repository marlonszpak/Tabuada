const numero = document.querySelector(".numero")
const botao = document.querySelector(".botao-confirmar")
const resultado = document.querySelector(".resultado")

botao.addEventListener("click", () =>{
    
    resultado.innerHTML = ''

    if(Number(numero.value) < 1 || Number(numero.value) > 12){
        resultado.innerHTML = "Digite um numero entre 1 e 12 ! "
    }
    else {
        for(let i = 1;i <= 12; i++){
            let calculo = `${String(i)} x ${numero.value} = ${i * Number(numero.value)}`

            let tabuada = document.createElement("p")

            tabuada.innerText = calculo
            
            resultado.appendChild(tabuada)

        }
}
})
