// selecting popup-box popup-overlays then +button

var popupoverlay = document.querySelector(".popup-overlay")
var popupbox = document.querySelector(".popup-box")
var addpopupbutton = document.getElementById("add-popup-button")

addpopupbutton.addEventListener("click",function(){
  popupoverlay.style.display="block"
  popupbox.style.display="block"
})

//select cancel button

var cancelbtn = getSelection("cancel-popup")

cancelbtn.addEventListener("click",function(event){
  event.preventDefault()
  popupoverlay.style.display="none"
  popupbox.style.display="none"
})

// select container,addbook,book-title-input,book-title-input,book-description-input

var container = document.querySelector(".container")
var addbook = document.getElementById("add-book")
var bookTitleInput = document.getElementById("book-title-input")
var bookAuthorInput = document.getElementById("book-author-input")
var bookDescriptonInput = document.getElementById("book-description-input")

book.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=`<h2>${bookTitleInput}</h2>
                   <h5>${bookAuthorInput}</h5>
                   <p>${bookDescriptonInput}</p>
                   <button onclick="deletebook()">Delete</button> `
    container.append(div)
    popupoverlay.style.display="none"
    popupbox.style.display="none"                             
})

function deletebook(event){
  event.target.parentElement.remove()
} 