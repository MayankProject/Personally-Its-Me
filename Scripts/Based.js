let before = document.querySelector('.based .heading-before')
let after = document.querySelector('.based .heading-after')
let state = true

function stretchLines(percentage){
    before.style.width = percentage
    after.style.width = percentage
}
function makeDefault(){
    if (!state) {
        stretchLines('100%')
        setTimeout(() => {
            before.style.left = '0'
            before.style.right = 'unset'
            
            after.style.right = '0'
            after.style.left = 'unset'
            
            stretchLines('50%')
        }, 300);
        setTimeout(() => {
            state = true
        }, 300);
        // state = true
    }
    else{
        setTimeout(() => {
            makeDefault()
        }, 100);
    }
}
document.querySelector('.based .heading').addEventListener('mouseleave', ()=>{
    makeDefault()
})
document.querySelector('.based .heading').addEventListener('mouseenter', ()=>{
    // state = true
    stretchLines('100%')
    if (state) {  
        setTimeout(() => {
            before.style.right = '0'
            before.style.left = 'unset'
            
            after.style.left = '0'
            after.style.right = 'unset'
            
            stretchLines('50%')
            setTimeout(() => {
                state = false
            }, 300);
        }, 300);
    }
})