let scrolledHeight = 0
let highlitedItem = 0
let allLinksList = Array.from(document.querySelectorAll('.Links'))
let totalLinks = allLinksList.length
let translate3dZindex = innerWidth<600?innerWidth/3:innerWidth/5
let contact = document.querySelector('.contact')
contact.dataset.initialTop = contact.getBoundingClientRect().top+scrollY

function scrollLinks() {
    highlitedItem = Math.floor(scrolledHeight/(90/totalLinks));
    allLinksList.forEach((e, index)=>{
        let rotateAngle = (scrolledHeight*180)/100
        let defaultAngle = Number(e.dataset.angle)
        let modifiedAngle = defaultAngle+rotateAngle;
        if (index===highlitedItem) {
            e.classList.add('active')
        }
        else{
            e.classList.remove('active')
        }
        e.animate({transform: `rotateX(${modifiedAngle}deg) translate3d(0, 0px, ${translate3dZindex}px) translate(-50%, -50%)`}, {duration: 500, fill: 'forwards'})
    })
}
scrollLinks()
addEventListener('scroll', (e)=>{
    if (scrollY>(Number(contact.dataset.initialTop)-innerHeight)) {
        scrolledHeight = Math.floor((100/(document.documentElement.scrollHeight-Number(contact.dataset.initialTop)))*(scrollY-contact.dataset.initialTop))
    }
    scrollLinks()
    if (scrollY>contact.dataset.initialTop-innerHeight/9) {
        document.body.style.background = 'black'
        gallery.style.border = '5px solid #fff'
    }
})

addEventListener('keypress', (e)=>{
    if (e.key = 'Enter') {
        document.querySelector('.Links.active').click()
    }
})