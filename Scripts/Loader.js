function addAnimation(){
    let delay = 0
    document.querySelectorAll('.loader p').forEach((e)=>{
        e.style.animationDelay = `${delay}s`
        e.classList.add('animate')
        delay+=0.5
    })
}
function removeAnimation(){
    document.querySelectorAll('.loader p').forEach((e)=>{
        e.classList.remove('animate')
    })
}
addAnimation()
setInterval(() => {
    removeAnimation()
    setTimeout(() => {
        addAnimation()
    }, 100);
}, 4500);

document.onreadystatechange = function() {
    if (document.readyState !== "complete") {
        document.querySelector("body").style.height = "100vh";
        document.querySelector("body").style.visibility = "hidden";
        document.querySelector(".loader").style.visibility = "visible";
    } else {
        document.querySelector("body").style.height = "unset";
        document.querySelector(".loader").style.display = "none";
        document.querySelector("body").style.visibility = "visible";
    }
};
