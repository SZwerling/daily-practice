const hamburger = document.querySelector(".hamburger")
const navMenu = document.querySelector(".nav-menu")
console.log('hello')

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active")
    navMenu.classList.toggle("active")
})

document.querySelectorAll(".nav-link").forEach((a) => {
    a.addEventListener("click", () => {
        hamburger.classList.remove("active")
        navMenu.classList.remove("active")
    })
})

