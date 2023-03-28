const prev = document.querySelector(`.prev`)

const next = document.querySelector(`.next`)

next.addEventListener(`click`, function(){
    let activeItem = document.querySelector(`.item.active`)
    
    let changeActive = activeItem.nextElementSibling

    activeItem.classList.remove(`active`)

    changeActive.classList.add(`active`)
})