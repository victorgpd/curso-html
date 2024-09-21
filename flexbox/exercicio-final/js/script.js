const menuLinks = document.querySelectorAll(".redirec a[href^='#']");
menuLinks.forEach((link) => {
    link.addEventListener("click", scrollToSection)
})

function scrollToSection(event) {
    event.preventDefault()
    const element = event.target
    getDistance(element)
}

function getDistance(element) {
    const id = element.getAttribute("href")
    const section = document.querySelector(id).offsetTop
    window.scroll({
        top: section - 85,
        behavior: "smooth",
    })
    closeMenu()
}

function openMenu() {
    document.getElementById("close-burguer").style.display = "block"
    document.getElementById("burguer").style.display = "none"
    document.getElementById("menu").style.display = "flex"
}

function closeMenu() {
    document.getElementById("menu").style.display = "none"
    document.getElementById("close-burguer").style.display = "none"
    document.getElementById("burguer").style.display = "block"
}