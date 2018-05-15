const form = document.querySelector('#myForm')

const handleSubmit = function(ev){
    ev.preventDefault()
    const users = document.querySelector("#users")
    const f = ev.target
    const userName = f.newText.value
    const age = f.age.value
    const p = document.createElement('p')
    p.textContent = `${userName}, ${age}`

    users.appendChild(p)
   

    f.reset()
    f.newText.focus()
    
}

form.addEventListener('submit', handleSubmit)