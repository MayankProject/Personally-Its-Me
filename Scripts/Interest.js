let lastMousePosition
let preview = document.querySelector('.preview')
let previewSh = document.querySelector('.preview ~ .preview-shadow')
let interestSection = document.querySelector('.interest-section')
let timerInt

function mouse_stopped_intrest(e){
    lastMousePosition = {x: e.clientX, y: e.clientY}
    preview.animate({'transform': `skew(${0}deg, ${0}deg)`}, {duration: 500, fill: 'forwards'})
    previewSh.animate({'transform': `skew(${0}deg, ${0}deg)`}, {duration: 500, fill: 'forwards'})
}

addEventListener('mousemove', (e)=>{    
    if (e.clientY>interestSection.getBoundingClientRect().top && e.clientY<interestSection.getBoundingClientRect().top+interestSection.getBoundingClientRect().height) {
        preview.animate({'opacity': `1`}, {duration: 200, fill: 'forwards'})
        previewSh.animate({'opacity': `0.5`}, {duration: 200, fill: 'forwards'})
    }
    else{
        preview.animate({'opacity': `0`}, {duration: 200, fill: 'forwards'})
        previewSh.animate({'opacity': `0`}, {duration: 200, fill: 'forwards'})
    }
    preview.animate({'translate': `calc(${e.clientX}px - 50%) calc(${e.clientY}px - 50%)`}, {duration: 500, fill: 'forwards'})
    previewSh.animate({'translate': `calc(${e.clientX}px - 50%) calc(${e.clientY}px - 50%)`}, {duration: 800, fill: 'forwards'})
    if (!lastMousePosition) {
        lastMousePosition = {x: e.clientX, y: e.clientY}
    }
    else{
        let x_transform = (lastMousePosition.x - e.clientX)*0.009
        let y_transform = (lastMousePosition.y - e.clientY)*0.020
        preview.animate({'transform': `skew(${x_transform}deg, ${y_transform}deg)`}, {duration: 300, fill: 'forwards'})
        previewSh.animate({'transform': `skew(${x_transform}deg, ${y_transform}deg)`}, {duration: 300, fill: 'forwards'})
    }
    if (timerInt!==null) {
        clearTimeout(timerInt)
    }
    
    timerInt = setTimeout(()=>{mouse_stopped_intrest(e)}, 100)
})

document.querySelectorAll('.tag').forEach((tag)=>{
    tag.addEventListener('mouseover', (e)=>{
        if (tag.querySelector('img')) {
            preview.src = `${tag.querySelector('img').src}`
            previewSh.src = `${tag.querySelector('img').src}`
        }
    })
})
addEventListener('scroll', ()=>{
    preview.animate({'opacity': `0`}, {duration: 200, fill: 'forwards'})
    previewSh.animate({'opacity': `0`}, {duration: 200, fill: 'forwards'})
})