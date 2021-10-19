const image = document.querySelector(".image");
const content = document.querySelector(".content");
const container = document.querySelector(".container");

content.addEventListener("mouseenter", function(){
    window.setTimeout(function(){
        container.style.transition = "0s all";
    }, 500);
});

content.addEventListener("mousemove", (e) => {
    let x=((window.innerWidth / 2 - e.pageX)/20)*(-1);
    let y=(window.innerHeight / 2 - e.pageY)/20;
    console.log(x, y)
    container.style.transform = "rotateY("+x+"deg) rotateX("+y+"deg"+")";
    image.style.transform = "translateZ(100px)";
});

content.addEventListener("mouseleave", e => {
    image.style.transform = "translateZ(0px)";
    container.style.transition = "0.5s all";
    container.style.transform = "rotateY(0deg) rotateX(0deg"+")";
});