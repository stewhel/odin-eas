
const clearBtn = document.querySelector('.clear-btn')
clearBtn.addEventListener('click', clearPad)

const changeBtn = document.querySelector('.change-btn')
changeBtn.addEventListener('click', test)

const container = document.querySelector('.container')

const slider = document.querySelector('.slider')
slider.addEventListener('mouseup', makePad)

let color = 'rgba(0, 0, 0, .5)'

function test(){
    console.log(slider.value)
}

function makePad(){
    
    removeBoxes(container);

    let sliderVal = document.getElementById('myRange')
    let num = sliderVal.value;
    
    for(let i=0; i<(num*num); i++){
        
        size = (1/num) * 100;
        let boxHeight = `height: ${size}%`;
        let boxWidth = `width: ${size}%`;
        const div = document.createElement('div');
        div.classList.add('box');
        div.setAttribute('id', i)
        div.style.cssText = boxHeight;
        div.style.cssText = boxWidth;
        div.onmouseover = colorBox; 
        const container = document.querySelector('.container');
        container.appendChild(div);
    }

}

function removeColor(box){
    box.style.backgroundColor= 'rgb(255, 255, 255)'
}

function clearPad(){
    let boxes = document.querySelectorAll('.box')
    boxes.forEach(box => removeColor(box))
}

function colorBox(e){
    box = e.path[0]
    box.style.backgroundColor= color
}

function removeBoxes(parent){
    while (parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
}

window.onload = makePad;










