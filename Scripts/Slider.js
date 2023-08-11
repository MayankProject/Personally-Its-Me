let downPosition = 0
let currentPosition = 0
let updatedTranslate = 0
let lastTranslate = 0
let hasToTransform = 0
let currentSkewPer = 0
let allImages = document.querySelectorAll('.slider-image')
let mouseMover = 0
let timerSlider
let lastPos = 0
let container = document.querySelector('.container')
let timerKeypress

function mousedown(e){
    if (e.type=='touchstart') {
        
        mouseMover = e.touches[0].clientX
        downPosition = e.touches[0].clientX
    }
    else{
        mouseMover = e.clientX
        downPosition = e.clientX
    }
}
addEventListener('touchstart', mousedown)
addEventListener('mousedown', mousedown)

function handleImage(){
    allImages.forEach((e)=>{
        // e.style.objectPosition = `${hasToTransform/10}px 0`
        e.animate({transform: `Skew(${-currentSkewPer*0.1}deg)`}, {duration: 300, fill: 'forwards'})
    })
}

function mouse_stopped(){
    mouseMover = 0
    allImages.forEach((e)=>{
        e.animate({transform: `Skew(0deg)`}, {duration: 700, fill: 'forwards'})
    })
}
function checkMouseStopped(){
    clearTimeout(timerSlider)
    timerSlider = setTimeout(mouse_stopped, 80)
}
function moveSlider(hasToTransform, duration){
    container.animate({transform: `translateX(${hasToTransform}px)`}, {duration: duration, fill: 'forwards'})
}

function mouseMove(e){
    checkMouseStopped()
    if (mouseMover===0) {
        mouseMover = e.touches?e.touches[0].clientX:e.clientX
    }
    if (!(downPosition===0)){
        currentPosition = e.touches?e.touches[0].clientX:e.clientX
        hasToTransform = (currentPosition-downPosition+lastTranslate)*3;
        if (hasToTransform>-4900 && hasToTransform<100) {
            handleImage()
            updatedTranslate = (currentPosition-downPosition+lastTranslate)
            moveSlider(hasToTransform, 1400)
        }    
        currentSkewPer = -((currentPosition-mouseMover)/screen.width)*230
    }
}
addEventListener('mousemove', mouseMove)
addEventListener('touchmove', mouseMove)
addEventListener('keydown', (e)=>{
    if (e.key === 'ArrowLeft') {
        clearTimeout(timerKeypress)
        if (hasToTransform-50>-4300 && hasToTransform-100<100) {
            currentSkewPer = 50
            moveSlider(hasToTransform, 900)
            moveSlider(hasToTransform-50, 900)
            handleImage()
            hasToTransform-=50
            timerKeypress = setTimeout(() => {
                currentSkewPer = 0
                handleImage()
            }, 300);
        }
    }
    if (e.key === 'ArrowRight') {
        clearTimeout(timerKeypress)
        if (hasToTransform+50>-4900 && hasToTransform+100<100) {
            currentSkewPer = -50
            moveSlider(hasToTransform, 900)
            moveSlider(hasToTransform+50, 900)
            handleImage()
            hasToTransform+=50
            timerKeypress = setTimeout(() => {
                currentSkewPer = 0
                handleImage()
            }, 300);
        }
    }
})

function mouseUp(e){
    mouse_stopped()
    downPosition = 0
    lastTranslate=updatedTranslate
}
addEventListener('touchend', mouseUp)
addEventListener('mouseup', mouseUp)