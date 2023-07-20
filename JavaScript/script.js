let hamburger = document.querySelector(".hamburger");
let navLinks = document.querySelector(".navLinks");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
})

let navlinks = document.querySelectorAll(".navLinks li a");
navlinks.forEach(links => links.onclick = () => {
    navLinks.classList.remove("active");
})

