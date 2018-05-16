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

    const term = document.createElement('dt')
    term.textContent = label

    const description = document.createElement('dd')

    try {
        description.appendChild(listItem)
    } catch(e) {
        description.textContent += listItem
    }

    item.appendChild(term)
    item.appendChild(description)
    return item
}

const renderList = function(data){
    const list = document.createElement('dl')
    const labels = Object.keys(data)
    labels.forEach(label => {
       const item = renderListItem(data[label], label)
       list.appendChild(item)
    })
    return list   
}

const handleSubmit = function(ev){
    ev.preventDefault()
    const f = ev.target
    const user = {
        userName: f.newText.value,
        age: f.age.value,
        favColor: renderColor(f.favoriteColor.value),
    }

    const users = document.querySelector("#users")
     users.appendChild(renderList(user))
 
    f.reset()
    f.newText.focus()  
}

form.addEventListener('submit', handleSubmit)