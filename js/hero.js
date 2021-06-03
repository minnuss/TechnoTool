const heroImage = document.querySelector('.card__image')

// ARRAY OF IMAGES TO BE CHANGED
const imagesArray = [
    'img/hero/1.jpg',
    'img/hero/2.jpg',
    'img/hero/3.jpg',
    'img/hero/4.jpg',
    'img/hero/5.jpg',
]

// CHECK FOR NEW RANDOM NUMBER ALWAYS, SO THEY DONT REPEAT AS LAST ONE
let ran
let temp

function checkRandom() {
    let random = Math.floor(Math.random() * imagesArray.length)
    temp = random
    if (ran === temp) {
        temp = Math.floor(Math.random() * imagesArray.length)
    }
    ran = temp
}

// CHANGE IMAGE
function changeImage() {
    // call for random number
    checkRandom()
    // console.log(ran)

    heroImage.src = imagesArray[ran]
    // call for css animation effect on image change
    heroImage.classList.add('active')

    // remove animation effect
    setTimeout(() => {
        heroImage.classList.remove('active')
    }, 750);

    // OLD SIMPLE CODE
    // console.log(heroImage.src)
    // let random = Math.floor(Math.random() * imagesArray.length)
    // heroImage.src = imagesArray[random]
}
// ON REFRESH PAGE, CALL FOR NEW RANDOM IMAGE
changeImage()

// CHANGE IMAGE ON TIME
setInterval(() => {
    changeImage()
}, 7000);



