const button = document.querySelector('button.greeting')
function changeText(ev){
    //use debbuger to pause execution and work in console
    ev.target.textContent = 'Clickity click'
    /*const paragraph = document.querySelector('p.greeting')

    //this works only when dealing with text
    paragraph.textContent = 'You done clicked'*/
}

button.addEventListener('click', changeText)