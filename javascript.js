//create initial board

let askSquares;
num = prompt("How many squares?")

const btn = document.querySelector('.btn')
btn.addEventListener('click', makePad)

const clearBtn = document.querySelector('.clear-btn')
clearBtn.addEventListener('click', clearPad)

const remBtn = document.querySelector('.rem-btn')
remBtn.addEventListener('click', removeBoxes)

const container = document.querySelector('.container')


function makePad(){
    
    removeBoxes(container);
    
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
    //console.log(e.path[0])
    box = e.path[0]
    box.style.backgroundColor='rgba(0, 0, 255, 1)'
}

function removeBoxes(parent){
    while (parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
}













