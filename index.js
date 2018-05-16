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
    item.textContent = `${label}: `
    try {
        item.appendChild(listItem)
    } catch(e) {
        item.textContent += listItem
    }
    return item
}

const renderList = function(userName, nameLabel, age, ageLabel, favColor, colorLabel){
    const list = document.createElement('ul')
    list.appendChild(renderListItem(userName, 'Name'))
    list.appendChild(renderListItem(age, 'Age'))
    list.appendChild(renderListItem(favColor,'Favorite Color'))
    return list
}

const handleSubmit = function(ev){
    ev.preventDefault()
    const users = document.querySelector("#users")
    const f = ev.target
    const userName = f.newText.value
    const age = f.age.value
    const favColor = f.favoriteColor.value
   
    users.appendChild(renderList(userName, 'Name', age, 'Age', renderColor(favColor), 'Favorite Color'))

 

    f.reset()
    f.newText.focus()
    
}

form.addEventListener('submit', handleSubmit)