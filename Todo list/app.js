const inputListItems = document.getElementById('inputListItems');
const ulItems = document.querySelector('ul');
const btn = document.querySelector('#btn');
console.log(btn.textContent);
function myHandler(){
    if(inputListItems.value == ''){
        alert('Please place your items correctly')

    }else{ 
    var list = inputListItems.value;
    var listItems= `<li id='${list}'>${list}<div><span id='${list}' onclick="editHandle('${list}')">Edit</span><span id='${list}' onclick ="deleteHandler('${list}')">Delete</span>
    </div></li>`;
    console.log(listItems);
    ulItems.style.width = '250px';
     ulItems.innerHTML += listItems
     inputListItems.value = ''
    }
    //  console.log(list);
}
function editHandle(list){
    console.log(list);
    const li = document.getElementById(list)
    inputListItems.value = li.childNodes[0].textContent
    btn.innerHTML = "Edit"
    btn.setAttribute(`onclick`,`newEditHandler('${list}')`);
}
function deleteHandler(list){
        const li = document.getElementById(list)
        li.style.transition = 'all 3s';
        li.style.width = '100px'
        li.remove()
        ulItems.removeChild(li);
}
function newEditHandler(list){
   const li = document.getElementById(list)
   console.log('chl rha hn');
   li.childNodes[0].textContent = inputListItems.value;
   btn.innerHTML = 'Submit';
   btn.setAttribute('onclick','myHandler()')
   inputListItems.value = ''
}
