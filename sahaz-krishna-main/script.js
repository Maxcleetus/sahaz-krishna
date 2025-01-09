//picture zoom 
document.querySelectorAll('.grid div img').forEach(image => {
    image.onclick = ()=>{
        document.querySelector('.popup').style.display = "block"
        document.querySelector('.popup img').src = image.getAttribute('src')
    }
});
document.querySelector('.popup span').onclick = ()=>{
    document.querySelector('.popup').style.display = "none"
}
//left and right
function bar(){
    document.querySelector(".travel").style.left = "80%"
    document.querySelector(".travel .fa-bars").style.left = "100%"
    document.querySelector(".travel .fa-xmark").style.left = "13%"
}
function rembar(){
    document.querySelector(".travel").style.left = "100%"
    document.querySelector(".travel .fa-bars").style.left = "-38%"
}