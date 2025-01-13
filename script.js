const body = document.querySelector("body");

const resizeButton = document.getElementById("resize");

document.addEventListener("DOMContentLoaded",()=>{
    resizeButton.addEventListener("click",()=>{
        body.classList.toggle("expanded");
    })
});

console.log("Hello");