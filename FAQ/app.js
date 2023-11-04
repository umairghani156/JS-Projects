const parent1 = document.querySelector('.parent1');
const parent2 = document.querySelector('.parent2');
const parent3 = document.querySelector('.parent3');
const parag = document.querySelector('#parag')
const parag2 = document.querySelector('#parag2')
const parag3 = document.querySelector('#parag3')
const one = document.getElementById('one')
const two = document.getElementById('two')
const three = document.getElementById('three')
const four = document.getElementById('four')
const five = document.getElementById('five')
const six = document.getElementById('six')

function myHandler1() {
    one.style.display = 'none'
    two.style.display = 'flex'
    parent1.style.height = '55px';
    parag.style.display = 'none'
}

function myHandler2(){
    one.style.display = 'flex'
    two.style.display = 'none'
    parent1.style.height = '';
    parag.style.display = 'flex'
}
function myHandler3(){
    four.style.display = 'flex'
    three.style.display = 'none'
    parent2.style.height = '55px';
    parag2.style.display = 'none'
}
function myHandler4(){
    three.style.display = 'flex'
    four.style.display = 'none'
    parent2.style.height = '';
    parag2.style.display = 'flex'
}
function myHandler5(){
    six.style.display = 'flex'
    five.style.display = 'none'
    parent3.style.height = '55px';
    parag3.style.display = 'none'
}
function myHandler6(){
    six.style.display = 'none'
    five.style.display = 'flex'
    parent3.style.height = '';
    parag3.style.display = 'flex'
}
