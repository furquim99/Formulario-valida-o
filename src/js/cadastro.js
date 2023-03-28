// const enviar = document.getElementById('submit');
// const form = document.querySelectorAll('.textos');
// const errorCampoObrigatorio = document.querySelectorAll('.campo-obrigatorio');

// enviar.addEventListener('click', function(select){
//     select.preventDefault()

//     form.forEach(function(indice, text){
//         if(indice.value !== ""){
//             indice.classList.remove('invalido')
//             indice.classList.add('valido')
//             errorCampoObrigatorio[text].classList.remove('mostra-msg')
//         }else{
//             indice.classList.remove('invalido')
//             indice.classList.add('valido')
//             errorCampoObrigatorio[text].classList.remove('mostra-msg')
//         }
//     })
// })

// form.forEach(function(indice, text){
//     indice.addEventListener('change', function(){
//         if(indice.value !== ""){
//             indice.classList.remove('invalido')
//             indice.classList.add('valido')
//             errorCampoObrigatorio[text].classList.remove('mostra-msg')
//         }else{
//             indice.classList.remove('valido')
//             indice.classList.add('invalido')
//             errorCampoObrigatorio[text].classList.add('mostra-msg')
//         }
//     })
// })


const enviar = document.querySelector('.submit')
const escrever = document.querySelectorAll('.textos')
const form = document.querySelector('form')

form.addEventListener("submit", (form) => {
    form.preventDefault()
})

escrever.forEach(element => {
    enviar.addEventListener('click', () => {
        if (element.value === "") {
            element.classList.remove('valido')
            element.classList.add('error')
            element.nextElementSibling.classList.remove('none')
        } else {
            element.classList.add('valido')
            element.classList.remove('error')
            element.nextElementSibling.classList.add('none')
        }
    })
});