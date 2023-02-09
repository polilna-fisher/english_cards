const cardLinks = document.querySelectorAll('.card')


function changeSide(element) {
    element.classList.toggle('rotate')
}

function hideNumber(element) {
    const numberLink = element.querySelector('.number')
    setTimeout(() => {
        numberLink.classList.toggle('hide')
    }, 15)
}

function showContent(element) {
    const contentLink = element.querySelector('.content')
    setTimeout(() => {
        contentLink.classList.toggle('hide')
    }, 15)

}


cardLinks.forEach(element => {
    element.addEventListener('click', () => {
        changeSide(element); hideNumber(element); showContent(element)
    })
})