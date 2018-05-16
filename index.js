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

// const renderList = function(userName, nameLabel, age, ageLabel, favColor, colorLabel){
//     const list = document.createElement('ul')
//     list.appendChild(renderListItem(userName, 'Name'))
//     list.appendChild(renderListItem(age, 'Age'))
//     list.appendChild(renderListItem(favColor,'Favorite Color'))
//     return list
// }

const handleSubmit = function(ev){
    ev.preventDefault()
    const f = ev.target

    const user = {
        userName: f.newText.value,
        age: f.age.value,
        favColor: renderColor(f.favoriteColor.value),
    }

    const list = document.createElement('ul')

    const labels = Object.keys(user)
    labels.forEach(function(label){
       const item = renderListItem(user[label], label)
       list.appendChild(item)
    })
   
    const users = document.querySelector("#users")
   // users.appendChild(renderList(userName, 'Name', age, 'Age', renderColor(favColor), 'Favorite Color'))

   users.appendChild(list)
 

    f.reset()
    f.newText.focus()
    
}

form.addEventListener('submit', handleSubmit)