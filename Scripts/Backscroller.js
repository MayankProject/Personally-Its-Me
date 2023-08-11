let Sentence = "Mayank Gupta "
for (let i = 0; i < 50; i++) {
    for (let i = 0; i < Sentence.length; i++) {
        const element = Sentence.charAt(i);
        let newSpan = document.createElement('div')
        newSpan.classList.add('highlight-backscroll')
        newSpan.setAttribute('data-blender', 'true')
        newSpan.innerHTML = `${element}`
        document.querySelector('.back-scroller').appendChild(newSpan)    
    }
}

document.querySelectorAll('.highlight-backscroll').forEach((blender)=>{
    blender.addEventListener('mouseover', blenderCursor)
    blender.addEventListener('mouseout', blenderCursor)
})

function moveBackScroller(){
    let updatedPosition = lastBackscrollPosition+BackScrollVel
    lastBackscrollPosition = updatedPosition
    document.querySelector('.back-scroller').animate({'translate': `calc(-50% + ${updatedPosition}px)`}, {duration: 500, fill:'forwards'})
}
addEventListener(('scroll'), ()=>{
    if (lastPointBackScrolled<scrollY) {
        BackScrollVel=10
    }
    else{
        BackScrollVel=-10
    }
    lastPointBackScrolled = scrollY
    moveBackScroller()
})
setInterval(() => {
    moveBackScroller()
}, 500);
