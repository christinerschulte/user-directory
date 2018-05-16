const form = document.querySelector('#myForm')

const renderColor = function(color){
    const colorDiv = document.createElement('div')
    colorDiv.style.backgroundColor = color
    colorDiv.style.width = '6rem'
    colorDiv.style.height = '3rem'
    return colorDiv
}

const handleSubmit = function(ev){
    ev.preventDefault()
    const users = document.querySelector("#users")
    const f = ev.target
    const userName = f.newText.value
    const age = f.age.value
    const favColor = f.favoriteColor.value

    //Bonus-render list item function to make each list item--create li stuff
    //will need to pass in arguments
    const nameItem = document.createElement('li')
    nameItem.textContent = `Name: ${userName}`

    const ageItem = document.createElement('li')
    ageItem.textContent = `Age: ${age}`
   
    const colorItem = document.createElement('li')
    colorItem.textContent = 'Favorite Color: '

    //HW-turn these lines into different function
    // const colorDiv = document.createElement('div')
    // colorDiv.style.backgroundColor = favColor
    // colorDiv.style.width = '6rem'
    // colorDiv.style.height = '3rem'
    
    //call HW function here
    colorItem.appendChild(renderColor(favColor))

    const list = document.createElement('ul')

    //super mega bonus - build list in seperate function
    //try not to user innerHTML
    list.appendChild(nameItem)
    list.appendChild(ageItem)
    list.appendChild(colorItem)

    users.appendChild(list)
   

    f.reset()
    f.newText.focus()
    
}

form.addEventListener('submit', handleSubmit)