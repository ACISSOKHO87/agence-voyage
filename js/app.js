const menu = document.getElementById("menu");
const items = document.querySelectorAll("item-menu")

window.document.addEventListener("DOMContentLoaded", () =>{

    window.addEventListener("scroll", () =>{
        menu.classList.remove("fa-xmark")
        document.querySelector("nav").classList.remove("toggle");
    })

    menu.addEventListener("click", (e)=>{
        menu.classList.toggle("fa-xmark")
        document.querySelector("nav").classList.toggle("toggle");
    });

    items.forEach((item) =>{
        item.addEventListener("click", (e) =>{
            menu.classList.remove("fa-xmark")
            document.querySelector("nav").classList.remove("toggle");
        })
    })

});
