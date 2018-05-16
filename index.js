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

const renderList = function(userName, nameLabel, age, ageLabel, favColor, colorLabel){
    const list = document.createElement('ul')
    list.appendChild(renderListItem(userName, nameLabel))
    list.appendChild(renderListItem(age, ageLabel))
    list.appendChild(renderListItem(favColor,colorLabel))
    return list
}

const handleSubmit = function(ev){
    ev.preventDefault()
    const users = document.querySelector("#users")
    const f = ev.target
    const userName = f.newText.value
    const age = f.age.value
    const favColor = f.favoriteColor.value
    const nameLabel = document.querySelector("label[for='newText']").textContent
    const ageLabel = document.querySelector("label[for='age']").textContent
    const colorLabel = document.querySelector("label[for='favoriteColor']").textContent
   
   // const list = document.createElement('ul')

    //super mega bonus - build list in seperate function
    //try not to user innerHTML
    // list.appendChild(renderListItem(userName, nameLabel))
    // list.appendChild(renderListItem(age, ageLabel))
    // list.appendChild(renderListItem(favColor,colorLabel))

    users.appendChild(renderList(userName, nameLabel, age, ageLabel, favColor, colorLabel))

 

    f.reset()
    f.newText.focus()
    
}

form.addEventListener('submit', handleSubmit)