const form = document.querySelector('#myForm')

const handleSubmit = function(ev){
    ev.preventDefault()
    const users = document.querySelector("#users")
    const f = ev.target
    const userName = f.newText.value
    users.textContent += ' ' + userName

    
}

form.addEventListener('submit', handleSubmit)