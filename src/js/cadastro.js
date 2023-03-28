
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