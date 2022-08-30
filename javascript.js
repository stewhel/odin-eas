
function colorBox(){
    console.log("yo")
}

function makePad(){
    for(let i=0; i<10; i++){
        const div = document.createElement('div');
        div.classList.add('box');
        div.textContent = "not empy";
        const container = document.querySelector('.container');
        container.appendChild(div);
    }
}




function addHover(){
    let boxes = document.querySelectorAll('.box');
    console.log(boxes)
    boxes.forEach(box => box.addEventListener('click', colorBox));
}


const btn = document.querySelector('.btn')
btn.addEventListener('click', makePad)

const btn2 = document.querySelector('.btn2')
btn2.addEventListener('click', addHover)

document.getElementsByClassName('.container2').onclick = colorBox'




//const color = document.querySelector('.box');







