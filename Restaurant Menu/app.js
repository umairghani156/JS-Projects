const btnList = ['All','Breakfast','Lunch','Shakes'];
let menuList = [
  {
    imgSrc: "one.PNG",
    listName: "Buttermilk Pancakes",
    price: "$15.99",
    descript: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, aliquam adipisicing elit adipisicing elit.",
    categoryName:"lunch"
  },
  {
    imgSrc: "two.PNG",
    listName: "Diner Double",
    price: "$13.99",
    descript: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, aliquam adipisicing elit adipisicing elit.",
    categoryName:"lunch"
  },
  {
    imgSrc: "three.PNG",
    listName: "Godzilla Milkshake",
    price: "$6.99",
    descript: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, aliquam adipisicing elit adipisicing elit.",
    categoryName:"shakes"
  },
  {
    imgSrc: "four.PNG",
    listName: "Country Delight",
    price: "$20.99",
    descript: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, aliquam adipisicing elit adipisicing elit.",
    categoryName:"breakfast"
  },
  {
    imgSrc: "four.PNG",
    listName: "Country Delight",
    price: "$20.99",
    descript: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, aliquam adipisicing elit adipisicing elit.",
    categoryName:"breakfast"
  },
  {
    imgSrc: "five.PNG",
    listName: "Egg Attack Yum",
    price: "$22.99",
    descript: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, aliquam adipisicing elit adipisicing elit.",
    categoryName:"lunch"
  },
  {
    imgSrc: "five.PNG",
    listName: "Egg Attack Yum",
    price: "$22.99",
    descript: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, aliquam adipisicing elit adipisicing elit.",
    categoryName:"lunch"
  },
  {
    imgSrc: "six.PNG",
    listName: "Egg Attack Yum",
    price: "$18.99",
    descript: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, aliquam adipisicing elit adipisicing elit.",
    categoryName:"shakes"
  },
]
const items = document.getElementById('container1');
const buttons = document.getElementById('btn')
btnList.forEach(function(button){
    buttons.innerHTML += `
    <button id="list" onclick="showItems('${button.toLocaleLowerCase()}')" >${button}</button>`
})
function showItems(category){ 
  console.log(menuList.categoryName);
  items.innerHTML = ""

  var filteredItems = menuList.filter(function(val){
    if(val.categoryName == category){ 
       return true
    }
  })
  
  if(filteredItems == ""){
    filteredItems = menuList;
  }
 filteredItems.forEach(function(val){
     items.innerHTML += `<div class="first">
     <img src="${val.imgSrc}" alt="">
     <div class="para3">
       <p id="para2">${val.listName} <span>${val.price}</span></p>
       <p style="opacity: 0.9; font-family:sans-serif; font-size: 14px;">${val.descript}</p>
     </div>`
})
}
showItems(btnList)


//
const num = [
  {
    name: 'umair',
  },
  {
    name: 'ahmed',
  },
  {
    name: 'umair',
  }
]
const name1 = "Umair";
const store = num.filter(function(val){
  if(val.name == name1){
    return true
  }
})
console.log(store);
const name = ["lunch"]
const check = menuList.filter(function(val){
  if(val.categoryName == name){
    return true
  }
})
console.log(check);