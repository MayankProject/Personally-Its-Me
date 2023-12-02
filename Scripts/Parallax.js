let sectionArr = document.querySelectorAll('section')
let lastPoint = 0
addEventListener(('scroll'), ()=>{
    sectionArr.forEach((section)=>{
        if (section.getBoundingClientRect().top<100 && section.getBoundingClientRect().top+section.getBoundingClientRect().height>0) {
            [section, ...section.querySelectorAll('[data-scrollingfactor]')].forEach((e)=>{
                if (lastPoint>scrollY) {
                    e.dataset.scrollOg = 0
                    document.querySelector('.hero').animate({'scale': `${1}`}, {duration: 600, fill: 'forwards'})
                    e.animate({"transform": `rotate(0deg) translateZ(0px)`}, {duration:800, fill:'forwards'})
                }

                // scrolling to Bottom
                else{                
                    if (e.dataset && e.dataset.scrollingfactor) {   
                        if (!e.dataset.scrollOg) {
                            e.dataset.scrollOg = 0
                        }
                        e.dataset.scrollOg = Number(e.dataset.scrollOg) + Number((e.dataset.scrollingfactor/300))
                        let media
                        if (e.dataset.scrollhorizontal) {
                            media = {"transform": `rotateY(${e.dataset.scrollOg}deg) translateZ(${500}px)`}
                        }
                        else{
                            media = {"transform": `rotateX(${e.dataset.scrollOg}deg) translateZ(${500}px)`}
                        }
                        e.animate(media, {duration:200, fill:'forwards'})                        
                    }
                }
            })
        }
    })
    lastPoint = scrollY

})
