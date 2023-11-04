const firstSlide = document.getElementById('firstSlide');
const secondSlide = document.getElementById('secondSlide')
const thirdSlide = document.getElementById('thirdSlide')
const changes2 = document.getElementById('changes2')
const curveLine1 = document.getElementById('curveLine1')
const curveLine2 = document.getElementById('curveLine2')
const curveLine3 = document.getElementById('curveLine3')
function firstHandler() {  
    secondSlide.style.transform = 'translate(-100%)';
    firstSlide.style.visibility = 'hidden'
    secondSlide.style.visibility = 'visible'
    secondSlide.style.transition = 'all 0.5s'
    secondSlide.style.display = 'flex'
    curveLine1.style.visibility = 'hidden'
    curveLine2.style.visibility = 'visible'
}

function secondHandler() {
    thirdSlide.style.transition = 'all 0.5s'
   thirdSlide.style.transform = 'translate(-120%)';
   secondSlide.style.display = 'none'
   thirdSlide.style.visibility = 'visible'
   curveLine2.style.visibility = 'hidden'
   curveLine3.style.visibility = 'visible'
}

function thirdHandler() {
    changes2.style.margin = '0'
    firstSlide.style.transform = 'translate(50%)';
    firstSlide.style.transition = 'all 0.5s';
    firstSlide.style.visibility = 'visible';
    thirdSlide.style.visibility ='hidden';
    curveLine1.style.visibility = 'visible';
    curveLine3.style.visibility = 'hidden';
}
function backHandler() {
    changes2.style.margin = '0';
    secondSlide.style.transform = 'translate(0)';
    firstSlide.style.visibility = 'hidden';
    secondSlide.style.visibility = 'visible';
    secondSlide.style.transition = 'all 0.5s';
    secondSlide.style.display = 'flex';
    curveLine1.style.visibility = 'hidden';
    curveLine2.style.visibility = 'visible';
}
function backSHandler() {
    thirdSlide.style.transition = 'all 0.5s';
   thirdSlide.style.transform = 'translate(-50%)';
   secondSlide.style.display = 'none';
   thirdSlide.style.visibility = 'visible';
   curveLine2.style.visibility = 'hidden';
   curveLine3.style.visibility = 'visible';
}