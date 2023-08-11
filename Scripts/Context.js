let shadowBehind = 0
var timer = null;

function doAfterStopped(){
    shadowBehind = false
    document.querySelectorAll('.title').forEach((e)=>{
        e.style.filter = `drop-shadow(0px ${0}px 0px rgba(0, 0, 0, 0.3))`
    })
}
window.addEventListener('scroll', function() {
    if (!shadowBehind) {
        shadowBehind = this.scrollY
    }   
    let calc = (shadowBehind-this.scrollY)*0.02
    document.querySelectorAll('.title').forEach((e)=>{
        e.style.transition = `0.2s`
        e.style.filter = `drop-shadow(0px ${calc}px 0px rgba(36, 117, 175, 0.8))`
    })
    if(timer !== null) {
        clearTimeout(timer);        
    }
    timer = setTimeout(doAfterStopped, 150);
}, false);
