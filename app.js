const mouse = document.querySelector(".cursor")

document.addEventListener("mousemove", e => {
    mouse.setAttribute("style","top:" + e.pageY + "px; left:" + e.pageX + "px")
})