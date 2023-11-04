const firstSlide = document.getElementById('firstSlide');
const secondSlide = document.getElementById('secondSlide');
const thirdSlide = document.getElementById('thirdSlide')
const top1 = document.getElementById('top1')
const top2 = document.getElementById('top2')
const top3 = document.getElementById('top3')

function firstHandler() {
    firstSlide.style.display = 'none'
    secondSlide.style.display = 'flex'
    top1.style.display = 'none';
    top2.style.display = "block"
}

function secondHandler() {
   firstSlide.style.display = 'none'
   secondSlide.style.display = 'none'
   thirdSlide.style.display = 'flex'
   top1.style.display = 'none';
   top2.style.display = 'none';
   top3.style.display = 'block'
}
function thirdHandler() {
    firstSlide.style.display = 'flex'
    secondSlide.style.display = 'none'
   thirdSlide.style.display = 'none'
   top2.style.display = 'block';
   top1.style.display = 'none';
   top3.style.display = 'block'
}