const form = document.querySelector('#myForm')

const changeHead = function(ev){
    ev.preventDefault()
    const heading = document.querySelector("#headOne")
    const f = ev.target
    const newText = f.newText.value
    heading.textContent = newText

    
}

form.addEventListener('submit', changeHead)