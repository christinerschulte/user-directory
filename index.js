const form = document.querySelector('#myForm')

const handleSubmit = function(ev){
    ev.preventDefault()
    const users = document.querySelector("#users")
    const f = ev.target
    const userName = f.newText.value
    const age = f.age.value
    const favColor = f.favoriteColor.value

    const nameItem = document.createElement('li')
    nameItem.textContent = `Name: ${userName}`

    const ageItem = document.createElement('li')
    ageItem.textContent = `Age: ${age}`
   
    const colorItem = document.createElement('li')
    colorItem.textContent = 'Favorite Color: '
    
    const colorDiv = document.createElement('div')
    colorDiv.style.backgroundColor = favColor
    colorDiv.style.width = '6rem'
    colorDiv.style.height = '3rem'
    colorItem.appendChild(colorDiv)

    const list = document.createElement('ul')
    list.appendChild(nameItem)
    list.appendChild(ageItem)
    list.appendChild(colorItem)

    users.appendChild(list)
   

    f.reset()
    f.newText.focus()
    
}

form.addEventListener('submit', handleSubmit)