const slide1 = document.querySelector('.parent');
const slide2 = document.querySelector('.parent2');
const xMark = document.querySelector('.fa-xmark');
const container = document.querySelector('.container');
const container1 = document.querySelector('.container1');
const changBOdy = document.querySelector('.bodyColor')
function myHandler(){
    container.style.transform = 'rotate(180deg)'
    container.style.visibility = 'visible'
    container.style.backgroundColor = '#DAF7F7'
    container1.style.opacity = '1'
    container1.style.width = "450px"
    slide2.style.visibility = 'visible'
}
function HiddenHandler(){
    container.style.transform = 'rotate(-0deg)'
    container1.style.width = "0px"
    slide2.style.visibility = 'hidden'
    container.style.backgroundColor = 'white'
    
}
