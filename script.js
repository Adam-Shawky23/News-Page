const menu = document.getElementById("menu")
const section = document.getElementById("section")
const closeBtn = document.getElementById("close")
const body = document.body
let clicked= true;

menu.addEventListener("click", ()=>{
    if (clicked){
        section.style.display="block"
        menu.style.display="none"
        body.style.overflow="hidden"
    

    }
})
closeBtn.addEventListener("click", ()=>{
    section.style.display="none"
    menu.style.display="block"
    body.style.overflow = "scroll"
})
