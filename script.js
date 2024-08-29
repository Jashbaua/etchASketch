const CONTAINER_DIM=document.querySelector('.container').offsetWidth
function createGrid(n){
    let box,cnt=document.querySelector('.container')
    cnt.style
    for(let i=0;i<n*n;i++){
        box=document.createElement('div')
        box.style.width=CONTAINER_DIM/n+'px'
        box.classList.add("box")
        cnt.appendChild(box)
    }
}
createGrid(16)
const boxes=document.querySelectorAll('.box')
boxes.forEach((box)=>box.addEventListener('mouseenter',changeColor))
function changeColor(event){
    event.target.style.backgroundColor="black"
}