
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

// popup exit

const popup = document.querySelector('.popup');
window.addEventListener('click', clickOutside);

function clickOutside(e) {
    if (e.target == popup) {
        popup.style.display = 'none';

    } else {
        popup.style.display = 'block';

    }
}

//


const popup1 = document.querySelector('#popup2');
window.addEventListener('click', clickOutsidee);

function clickOutsidee(e) {
    if (e.target == popup1) {
        popup1.style.display = 'none';

    } else {
        popup1.style.display = 'block';

    }
}
const popup4 = document.querySelector('#popup4');
window.addEventListener('click', clickOutsid);

function clickOutsid(e) {
    if (e.target == popup4) {
        popup4.style.display = 'none';

    } else {
        popup4.style.display = 'block';

    }
}

const popup2 = document.querySelector('#popup3');
window.addEventListener('click', clickOutsideee);

function clickOutsideee(e) {
    if (e.target == popup2) {
        popup2.style.display = 'none';

    } else {
        popup2.style.display = 'block';

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