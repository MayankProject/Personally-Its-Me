let gallery = document.querySelector('.gallery')
gallery.dataset.initialTop = gallery.getBoundingClientRect().top+scrollY
addEventListener('scroll', ()=>{
    if (scrollY>Number(gallery.dataset.initialTop)+innerHeight && scrollY<Number(gallery.dataset.initialTop)+100) {
        console.log(scrollY, gallery.dataset.initialTop)
        document.body.style.background = 'black'
        gallery.style.border = '5px solid #fff'
    }
    else{
        gallery.style.border = '5px solid transparent'
    }
})