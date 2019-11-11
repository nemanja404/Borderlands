
window.addEventListener('load', reset);
const all = document.querySelector('.popup');
function reset(e) {
    all.style.display = 'none'
}
window.addEventListener('load', reset2);
const all2 = document.querySelector('#popup2');
function reset2(e) {
    all2.style.display = 'none'
}
window.addEventListener('load', reset3);
const all3 = document.querySelector('#popup3');
function reset3(e) {
    all3.style.display = 'none'
}
window.addEventListener('load', reset4);
const all4 = document.querySelector('#popup4');
function reset4(e) {
    all4.style.display = 'none'
}

const buttons = document.querySelector('.tabs__buttons');
const img = document.querySelectorAll('.tabs__pic');
const text = document.querySelectorAll('.tabs__text');
buttons.addEventListener('click', function (e) {
    if (e.target.tagName == "BUTTON") {

        const targetPanel = document.querySelector(e.target.dataset.target);
        img.forEach(function (panel) {
            if (panel == targetPanel) {
                panel.classList.add('select');

            } else {
                panel.classList.remove('select');

            }
        })
    }
});

//popup exit
const popup = document.querySelector('.popup');
const newspopup = document.querySelector('#popup2');
const member = document.querySelector('#popup3');
const gearbox = document.querySelector('#popup4');
const btn1 = document.querySelector('.btn1');
btn1.addEventListener('click', open);
const btn2 = document.querySelector('.btn2');
btn2.addEventListener('click', open2);
const btn3 = document.querySelector('.btn3');
btn3.addEventListener('click', open3);
const btn4 = document.querySelector('.btn4');
btn4.addEventListener('click', open4);

function open() {
    popup.style.display = 'block';
    console.log('uspeh');
}
function open2() {
    newspopup.style.display = 'block';
    console.log('uspeh');
}
function open3() {
    member.style.display = 'block';
    console.log('uspeh');
}
function open4() {
    gearbox.style.display = 'block';
    console.log('uspeh');
}


window.addEventListener('click', clickOutside);

function clickOutside(e) {
    if (e.target == popup) {
        popup.style.display = 'none';

    }
}


window.addEventListener('click', clickingOutside);

function clickingOutside(e) {
    if (e.target == newspopup) {
        newspopup.style.display = 'none';
        console.log('newspopup');
    }
}

window.addEventListener('click', clickedOutside);

function clickedOutside(e) {
    if (e.target == member) {
        member.style.display = 'none';
        console.log('memberpopup');
    }
}

window.addEventListener('click', clickerOutside);

function clickerOutside(e) {
    if (e.target == gearbox) {
        gearbox.style.display = 'none';
        console.log('gerboxPopup');
    }
}

// dropdown menu

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