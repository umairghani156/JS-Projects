const navList = document.getElementById('navList');
const checkKro = document.getElementById('checkKro');
const icons = document.querySelectorAll('#icons');
console.log(icons);
const bar = document.getElementById('bar')
let check = false

function myCall() {
const balancinWidth = window.innerWidth;
    if (balancinWidth <= 780){  
    navList.style.display = 'none'
    bar.style.display = 'block'
    icons.forEach(function(val){
        val.style.display = 'none'
        check = true
    })
    }else{
        bar.style.display = 'none'
        navList.style.display = 'flex'
        icons.forEach(function(val){
            val.style.display = 'flex'
        })
        console.log(icons);
    }
}
window.addEventListener('resize', myCall);
