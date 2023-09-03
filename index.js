let elem = document.querySelectorAll(".elem");

elem.forEach(function (element) {
    element.addEventListener("mousemove", () => {
        element.childNodes[3].style.opacity = 1;
    })
    element.addEventListener("mouseleave", () => {
        element.childNodes[3].style.opacity = 0;
    })
    element.addEventListener("mousemove", (event) => {
        element.childNodes[3].style.left = event.x + "px";
        element.childNodes[3].style.top = event.y + "px";
    })
})