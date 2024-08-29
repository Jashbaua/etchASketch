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
    const boxes=document.querySelectorAll('.box')
    boxes.forEach((box)=>box.addEventListener('mouseenter',changeColor))
    function changeColor(event){
        event.target.style.backgroundColor=randomColorGenerator()
    }
}
let alpha=0;
function randomColorGenerator(){
    let r=parseInt(Math.random()*256),
        b=parseInt(Math.random()*256),
        g=parseInt(Math.random()*256);
    if(alpha<1)alpha+=0.1
    return 'rgb('+r+','+b+','+g+','+alpha+')'
}
createGrid(16)
const btn=document.querySelector('button')
btn.addEventListener('click',promptForResolution)
function deletegrid(){
    const cnt=document.querySelector('.container')
    cnt.textContent=''
}
function promptForResolution(){
    let numberOfBoxesPerSide=prompt("Max limit: 100")
    if(numberOfBoxesPerSide>100){
        alert("Enter number less than 100!")
    }
    else {
        deletegrid()
        createGrid(numberOfBoxesPerSide)
    }
}