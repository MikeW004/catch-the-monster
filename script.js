const bodyElement = document.querySelector("body");
const btnTheme = document.querySelector("#theme");





btnTheme.addEventListener("click", () => {
    bodyElement.classList.toggle("dark-mode");
})