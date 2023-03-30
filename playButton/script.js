'use strict';

const playBtn = document.querySelector('.visually-hidden');
const label = document.querySelector('.label');

playBtn.addEventListener('click', function (e) {
    if (e.target.checked) {
        label.innerHTML = 'pause';
        label.classList.remove('move');
        label.classList.add('back');
    } else {
        label.innerHTML = 'play';
        label.classList.add('move');
        label.classList.remove('back');
    }
});
