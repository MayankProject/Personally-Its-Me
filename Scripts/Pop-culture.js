let popSection = document.querySelector('.pop-culture')
popSection.dataset.initialTop = popSection.getBoundingClientRect().top+scrollY
addEventListener('scroll', ()=>{
    if (scrollY>popSection.dataset.initialTop-innerHeight/3 && scrollY<Number(popSection.dataset.initialTop)+300) {
        if (!Array.from(document.querySelector('.slider-image').classList).includes('animated')) {
            moveSlider(-200, 800)
        }
        document.body.style.background = 'black'
        document.querySelector('.pop-culture .container').style.opacity = 1
        popSection.animate({"height": `120vh`}, {duration:700, fill:'forwards'})
        document.querySelectorAll('.slider-image:nth-child(even)').forEach((e)=>{
            e.classList.add('slide-upward')
            e.classList.add('animated')
        })
        document.querySelectorAll('.slider-image:nth-child(odd)').forEach((e)=>{
            e.classList.add('animated')
            e.classList.add('slide-downward')
        })
    }
    else{
        document.body.style.background = 'unset'
    }
})