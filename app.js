const burger = document.querySelector('.nav-burger');
const navBar = document.querySelector('.nav-bar');


burger.addEventListener('click', function(){
    navBar.classList.toggle('nav-bar-active');
})

const prodLink = document.querySelector('.product-dropdown');
const prodTarget = document.querySelector('.product-dropdown-menu');
const prodArrow = document.querySelectorAll('.product-arrow')


const compLink = document.querySelector('.company-dropdown');
const compTarget = document.querySelector('.company-dropdown-menu');
const compArrow = document.querySelectorAll('.company-arrow')

const connLink = document.querySelector('.connect-dropdown');
const connTarget = document.querySelector('.connect-dropdown-menu');
const connArrow = document.querySelectorAll('.connect-arrow')


prodLink.addEventListener('click', function(){
    prodTarget.classList.toggle('drop');
    compTarget.classList.remove('drop');
    connTarget.classList.remove('drop');

    // arrow to point up after clicking on it to show to collapse it back up
    prodArrow.forEach(a => {
        a.classList.toggle('point-up');
    })
    compArrow.forEach(a => {
        a.classList.remove('point-up');
    })
    connArrow.forEach(a => {
        a.classList.remove('point-up');
    })

})

compLink.addEventListener('click', function(){
    compTarget.classList.toggle('drop');
    prodTarget.classList.remove('drop');
    connTarget.classList.remove('drop');

    compArrow.forEach(a => {
        a.classList.toggle('point-up');
    })

    prodArrow.forEach(a => {
        a.classList.remove('point-up');
    })

    connArrow.forEach(a => {
        a.classList.remove('point-up');
    })
})


connLink.addEventListener('click', function(){
    connTarget.classList.toggle('drop');
    prodTarget.classList.remove('drop');
    compTarget.classList.remove('drop');

    connArrow.forEach(a => {
        a.classList.toggle('point-up');
    })

    prodArrow.forEach(a => {
        a.classList.remove('point-up');
    })
    compArrow.forEach(a => {
        a.classList.remove('point-up');
    })
})