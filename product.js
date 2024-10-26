var menu=document.getElementById("menu")
var close=document.getElementById("close")
var sidenav=document.getElementById("sidenav")
menu.addEventListener("click",function(){
    sidenav.style.right=0

})
close.addEventListener("click",function(){
    sidenav.style.right="-50%"
})