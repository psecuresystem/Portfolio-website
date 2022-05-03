let sections = document.querySelectorAll('.section')
let sectBtns = document.querySelectorAll('.controls')
let sectBtn = document.querySelectorAll('.control')
let main = document.querySelector('main')

function PageTransitions(){
    //Button click active class
    for(let i = 0; i < sectBtn.length; i++){
        sectBtn[i].addEventListener('click',e => {
            let currentButton = document.querySelector('.active-btn')
            currentButton.classList.remove('active-btn')
            e.target.classList.add('active-btn')
            let id = sectBtn[i].getAttribute('data-id')
            let active = document.querySelector('.section.active')
            let activeSection = document.querySelector(`#${id}`)
            active.classList.remove('active')
            activeSection.classList.add('active')
        })
    }

    //Toggle theme
    const themeBtn = document.querySelector('.theme-btn')
    themeBtn.addEventListener('click', e => {
        let element = document.body.classList.toggle('light-mode')
    })
}

PageTransitions()