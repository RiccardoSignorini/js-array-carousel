const prev = document.querySelector(`.prev`)

const next = document.querySelector(`.next`)

next.addEventListener(`click`, function(){
    let activeItem = document.querySelector(`.item.active`)
    
    let changeActive = activeItem.nextElementSibling

    if(activeItem.classList.contains(`last`)){
        changeActive = document.querySelector(`.item.first`)
    }

    activeItem.classList.remove(`active`)

    changeActive.classList.add(`active`)
})

prev.addEventListener(`click`, function(){
    let activeItem = document.querySelector(`.item.active`)
    
    let changeActive = activeItem.previousElementSibling

    if(activeItem.classList.contains(`first`)){
        changeActive = document.querySelector(`.item.last`)
    }

    activeItem.classList.remove(`active`)

    changeActive.classList.add(`active`)
})