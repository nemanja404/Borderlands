

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