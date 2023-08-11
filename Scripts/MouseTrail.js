allTrailers.forEach((e)=>{
    e.style.width = offset + 'px'
    e.style.height = offset + 'px'
    e.style.transition = e.dataset.speed+"s"
    offset-=40
})
addEventListener("mousemove", (e)=>{
    position = {
        "x": e.clientX,
        "y": e.clientY
    }
})
function main(){
    allTrailers.forEach((e)=>{
        e.style.top = position.y+"px"
        e.style.left = position.x+"px"
    })
    requestAnimationFrame(main)     
}
requestAnimationFrame(main)