const form = document.querySelector('#myForm')

const renderColor = function(color){
    const colorDiv = document.createElement('div')
    colorDiv.style.backgroundColor = color
    colorDiv.style.width = '6rem'
    colorDiv.style.height = '3rem'
    return colorDiv
}

const renderListItem = function(listItem, label){
    const item = document.createElement('li')
    if(label === 'Favorite Color'){
        item.textContent = `${label}:`
        item.appendChild(renderColor(listItem))
    } else {
        item.textContent = `${label}: ${listItem}`
    }
    return item
}

const handleSubmit = function(ev){
    ev.preventDefault()
    const users = document.querySelector("#users")
    const f = ev.target
    const userName = f.newText.value
    const age = f.age.value
    const favColor = f.favoriteColor.value
   
    // const colorItem = document.createElement('li')
    // colorItem.textContent = 'Favorite Color: '
    
    // colorItem.appendChild(renderColor(favColor))

    const list = document.createElement('ul')

    //super mega bonus - build list in seperate function
    //try not to user innerHTML
    list.appendChild(renderListItem(userName, document.querySelector("label[for='newText']").textContent))
    list.appendChild(renderListItem(age, document.querySelector("label[for='age']").textContent))
    list.appendChild(renderListItem(favColor,document.querySelector("label[for='favoriteColor']").textContent))

    users.appendChild(list)

 

    f.reset()
    f.newText.focus()
    
}

form.addEventListener('submit', handleSubmit)