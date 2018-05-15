const button = document.querySelector('button.greeting')
const heading = document.querySelector('#headTwo')
function changeText(){
    //use debbuger to pause execution and work in console
    heading.textContent = 'Different second heading'
    /*const paragraph = document.querySelector('p.greeting')

    //this works only when dealing with text
    paragraph.textContent = 'You done clicked'*/
}

button.addEventListener('click', changeText)