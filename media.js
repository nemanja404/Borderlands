window.addEventListener('load', reset2);
const all2 = document.querySelector('#popup2');
function reset2(e) {
    all2.style.display = 'none'
}


const newspopup = document.querySelector('#popup2');
const btn2 = document.querySelector('.btn2');
btn2.addEventListener('click', open2);

function open2() {
    newspopup.style.display = 'block';

}



window.addEventListener('click', clickingOutside);

function clickingOutside(e) {
    if (e.target == newspopup) {
        newspopup.style.display = 'none';

    }
}



const svg = document.querySelector('.svgDD');
const list = document.querySelector('.header__list');
svg.addEventListener('click', heightAdd);

function heightAdd() {
    list.classList.toggle('heightAdded');
}



document.addEventListener('scroll', scrolled);
function scrolled() {
    const scroll = window.scrollY;
    if (scroll > 300) {
        list.classList.remove('heightAdded');

    }
}