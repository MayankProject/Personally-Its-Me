let sno = 0
let wrapper = document.querySelector('.quotes .wrapper-quotes')
let allQuotes = wrapper.querySelectorAll('p')
let directionSkew = 1
let nextLineTimer
let currentLine
function updateQuote(){
    allQuotes.forEach((quote)=>{
        wrapper.animate({'transform': `skew(0, ${directionSkew*2}deg)`}, {duration: 300, fill: 'forwards'})
    })
    setTimeout(() => {
        wrapper.animate({translate: `0 -${sno*100}%`}, {duration: 200, fill: 'forwards'})
            allQuotes.forEach((quote)=>{
                wrapper.animate({'transform': `skew(0, 0deg)`}, {duration: 600, fill: 'forwards'})
            })
    }, 300);
}
function next(){
    if (Array.from(wrapper.querySelectorAll('p')).length===sno+1) {
        sno = 0
        wrapper.animate({translate: `0 0%`}, {duration: 0, fill: 'forwards'})
    }
    else{
        updateQuote()
        sno++
    }
    currentLine = Array.from(wrapper.querySelectorAll('p'))[sno]
    currentLine.classList.add('show')
    directionSkew*=-1
}
nextLineTimer =  setInterval(() => {
    if (currentLine) {
        currentLine.classList.remove('show')
    }
    next()
}, 3000);

document.querySelector('.quotes').addEventListener('click', ()=>{
    currentLine.classList.remove('show')
    next()
    clearTimeout(nextLineTimer)
    nextLineTimer =  setInterval(() => {
            next()
    }, 3000);
})