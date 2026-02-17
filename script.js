const burger = document.querySelector(".burger");
const menu = document.querySelector(".mobile-menu");
const liElements = document.querySelectorAll(".mobile-menu ul li")
const showMenu = () => {
    menu.classList.toggle("active")
}

burger.addEventListener("click",showMenu)

const closeMenu = () => {
    for(let i = 0; i<liElements.length; i++){
        liElements[i].addEventListener("click", () => {
            menu.classList.remove("active")
        })
    }
}
closeMenu()
