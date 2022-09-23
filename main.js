let ul = document.querySelector(".items")
ul.firstElementChild.textContent = "hello"
ul.firstElementChild.style = "color:green"
ul.children[1].style.background = "yellow"
const btn = document.querySelector('.btn')
//color change when click
btn.addEventListener('click',(e) =>{
    e.preventDefault()
   document.querySelector('.btn').style= 'background-color:red'
})

btn.addEventListener('mouseover',(e) =>{
    e.preventDefault()
    document.querySelector('#my-form').style.background = '#ccc'
})
//mouseout form color  changes back to original
btn.addEventListener('mouseout',(e) =>{
    e.preventDefault()
    document.querySelector('#my-form').style.background = 'white'
})
const myForm = document.querySelector('#my-form')
const nameInput = document.querySelector('#name')
const email = document.querySelector('#email')
const msg = document.querySelector('.msg')
myForm.addEventListener('submit', onSubmit)
function onSubmit(e){
    e.preventDefault()
   if(nameInput.value === '' || email.value === ""){
    msg.classList.add('error')
    msg.innerHTML = 'Please Enter All Fields'
   }else{
    console.log("nameInput.value")
    console.log(email.value)

   }
}


var headerTitle = document.getElementById('main-header')
headerTitle.style.borderBottom = "solid 3px black"

var item = document.getElementsByClassName('title')
// console.log(item);
item[0].style.fontWeight ="bold"
item[0].style = 'color: #00FF00'