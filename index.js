const button = document.querySelector('button.greeting')
function changeText(){
    const paragraph = document.querySelector('p.greeting')

    //this works only when dealing with text
    paragraph.textContent = 'You done clicked'
}

button.addEventListener('click', changeText)