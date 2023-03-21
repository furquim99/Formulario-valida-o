const enviar = document.getElementById('mensagem');
const form = document.querySelectorAll('.textos');
const errorCampoObrigatorio = document.querySelectorAll('.campo-obrigatorio');

enviar.addEventListener('click', function(select){
    select.preventDefault()

    form.forEach(function(indice, text){
        if(indice.value !== ""){
            indice.classList.remove('invalido')
            indice.classList.add('valido')
            errorCampoObrigatorio[text].classList.remove('mostra-msg')
        }else{
            indice.classList.remove('invalido')
            indice.classList.add('valido')
            errorCampoObrigatorio[text].classList.remove('mostra-msg')
        }
    })
})

form.forEach(function(indice, text){
    indice.addEventListener('change', function(){
        if(indice.value !== ""){
            indice.classList.remove('invalido')
            indice.classList.add('valido')
            errorCampoObrigatorio[text].classList.remove('mostra-msg')
        }else{
            indice.classList.remove('valido')
            indice.classList.add('invalido')
            errorCampoObrigatorio[text].classList.add('mostra-msg')
        }
    })
})