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
        document.querySelector(".loader").style.opacity = "1";
    } else {

        document.querySelector(".loader").style.opacity = "0";
        setTimeout(() => {
            document.body.classList.remove('not-loaded')
        }, 400);
    }
};
