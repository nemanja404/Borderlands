

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

