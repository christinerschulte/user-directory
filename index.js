
const heading = document.querySelector("#headOne")

function changeHead(form){
    const newText = form.newText.value 
    heading.innerHTML = newText

    
}


/*function changeText(){
    //use debbuger to pause execution and work in console
    heading.textContent = 'Different second heading'
    /*const paragraph = document.querySelector('p.greeting')

    //this works only when dealing with text
    paragraph.textContent = 'You done clicked'
}*/

