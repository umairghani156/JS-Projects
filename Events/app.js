// const btn = document.querySelector('.btn');
// const para = document.getElementById('para');
// const text = "We should always take care of reader's interest while writing about anything because reader is the first priority, who read everything that we write."
// const texr2 = text.slice(0,15) + "..."
// para.textContent = texr2
// btn.addEventListener('click', (event) => {
//     para.innerText = text.slice(0);
//     event.currentTarget.textContent = "See less"
//     btn.id = "but"
    
// })
// btn.setAttribute("onclick","myhandle()")
//  function myhandle(){
//     para.innerText = text.slice(0)
//     btn.textContent = "Click me";
//     btn.id = "but"
// }
// const but = document.getElementById('but');
// but.addEventListener('click', function(){
//     para.innerText = text.slice(0,15);
// })
// const div = document.querySelector('.main');

// console.log(div.classList.add('nav'));

// const btn = document.querySelector('button');
// const imgSrc = document.querySelector('img')
// btn.addEventListener('mousedown', () =>{
//     imgSrc.src = "./Assets/sky.jpg"
// } );
// imgSrc.addEventListener("click", function(){
//     imgSrc.src = ""
// });

// imgSrc.addEventListener('mousedown', function(){
//     this.src = ""
// });
// imgSrc.addEventListener('mouseenter', function(){ This is like hover
//     this.src = ""
// });
// imgSrc.addEventListener('mouseleave', function(){
//     this.src = ""
// });
// imgSrc.addEventListener('mousemove', function(){ This is also like hover
//     this.src = ""
// });
// imgSrc.addEventListener('mouseout', function(){
//     this.src = ""
// });
// imgSrc.addEventListener('mouseover', function(){
//     this.src = ""
// });
// imgSrc.addEventListener('mouseup', function(){
//     this.src = ""
// });
const userName = document.getElementById('userName')
// userName.addEventListener('keypress', function(){ This show everyletter one by one
//     console.log(this.value);
// });
// userName.addEventListener('keydown', function(){
//     console.log(this.value);
// });
// userName.addEventListener('keyup', function(){
//     console.log(this.value);
// });

const btn = document.querySelector('button');
// btn.addEventListener('click', ()=> {
//     console.log(this); This shows father mean to say Window
// })

// btn.addEventListener('click', function(event) {
//     console.log(event); //This shows pointerevent
// })
// btn.addEventListener('click', function(event) {
//     console.log(event.currentTarget); //This brings tag with text content
// })
// btn.addEventListener('click', function() {
//     console.log(btn.currentTarget); //This shows undefined bcz it doesn't have parameter
// })
// btn.addEventListener('mouseleave',(event) => {
//     console.log(event.type); //This shows attrubute type whether it is click or mouseover
// })
const heading = document.querySelector('h1');
heading.addEventListener('click', (event) =>{
    console.log(event.currentTarget);
})
// btn.addEventListener('click', function(event) {
//     console.log(event.currentTarget.classList.add('nav')); //This shows attrubute type whether it is click or mouseover
// })

btn.addEventListener('click', function(event){
    event.currentTarget.classList.add('blue')
    console.log(event.type);
})

