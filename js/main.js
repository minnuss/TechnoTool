const hambBox = document.querySelector('.hamb-box')
const navBox = document.querySelector('.nav__box')
const navLinks = document.querySelectorAll('.nav__link')

hambBox.addEventListener('click', () => {
    hambBox.classList.toggle('active')
    navBox.classList.toggle('active')
})

navBox.addEventListener('click', (e) => {
    // console.log(e.currentTarget)
    if (e.currentTarget !== navLinks) {
        hambBox.classList.remove('active')
        navBox.classList.remove('active')
    }
})