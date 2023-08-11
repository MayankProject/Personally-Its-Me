// Hero Section


// BackScroll
let lastPointBackScrolled = 0
let BackScrollVel = 10
let lastBackscrollPosition = 0

// cursor trail 
let allTrailers = document.querySelectorAll(".cursor-trailer")
let offset = 40
let position = {
    'x': 0,
    'y': 0
};

// Skew Scroll
let allSkewElements = document.querySelectorAll('[data-skew]')


function blenderCursor(event){
    allTrailers.forEach((e)=>{
        if (event.type==='mouseover') {
            e.style.mixBlendMode = 'difference'
            if (event.target.dataset.cursorSize) {
                e.animate({'scale': event.target.dataset.cursorSize}, {duration: 400, fill:"forwards"})
            }
        }
        else{ 
            if (event.target.dataset.cursorSize) {
                e.animate({'scale': 1}, {duration: 400, fill:"forwards"})
                e.style.mixBlendMode = ''
            }
            else{
                e.style.mixBlendMode = ''
            }
        }
    })
}
document.querySelectorAll('.tag').forEach((e)=>{
    // e.setAttribute('data-scrollhorizontal', true)
    e.setAttribute('data-scrollingfactor', ((Math.random()*(-20-20))+20))
    e.setAttribute('data-blender', 'true')
    e.setAttribute('data-cursor-size', '2')
})
document.querySelectorAll('[data-blender]').forEach((blender)=>{
    blender.addEventListener('mouseout', blenderCursor)
    blender.addEventListener('mouseover', blenderCursor)
})

addEventListener('scroll', ()=>{
    allTrailers.forEach((e)=>{
        e.animate({'scale': 1}, {duration: 400, fill:"forwards"})
        e.style.mixBlendMode = ''
    })
})