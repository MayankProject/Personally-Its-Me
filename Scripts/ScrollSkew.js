let startScrollSkew = 0
var timerSkew = null;

function doAfterStoppedSkew(){
    startScrollSkew = false
    allSkewElements.forEach((e)=>{
        e.animate({'transform': `skew(${0}deg)`, 'transition-timing-function': "cubic-bezier(.22,.52,.78,.19)"}, {duration: 300, fill: "forwards", })

    })
}
window.addEventListener('scroll', function() {
    if (!startScrollSkew) {
        startScrollSkew = this.scrollY
    }    
    allSkewElements.forEach((e)=>{
        let calcSkew = (startScrollSkew - this.scrollY)*0.004
        e.animate({'transform': `skew(0deg, ${calcSkew}deg)`}, {duration: 1000, fill: "forwards"})
    })
    if(timerSkew !== null) {
        clearTimeout(timerSkew);        
    }
    timerSkew = setTimeout(doAfterStoppedSkew, 20);
}, false);
