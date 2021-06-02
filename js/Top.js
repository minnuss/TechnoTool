const arrowTop = document.querySelector('.top')

window.addEventListener('scroll', () => {
    console.log(scrollY)
    if (scrollY > 420) {
        arrowTop.classList.add('active')
    } else {
        arrowTop.classList.remove('active')
    }
})